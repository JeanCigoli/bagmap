package com.maps.bagmap.resource;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.maps.bagmap.dto.BranchRegistration;
import com.maps.bagmap.model.Image;
import com.maps.bagmap.model.Branch;
import com.maps.bagmap.service.BranchService;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.firebase.FirebaseStorageService;
import com.maps.bagmap.service.firebase.UploadInput;
import com.maps.bagmap.utils.Upload;

@RestController
@CrossOrigin
@RequestMapping("/branch")
public class BranchResource {

	@Autowired
	private BranchService branchService;

	@Autowired
	private FirebaseStorageService firebaseStorage;

	@GetMapping("/")
	public ResponseEntity<Map<Object, Object>> selectAllBranch(Pageable pageable) {

		Page<Branch> branch = branchService.listAll(pageable);

		Map<String, Page<Branch>> response = new HashMap<>();

		response.put("branch", branch);

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", response, null);

	}
	
	@GetMapping("/type/{type}")
	public ResponseEntity<Map<Object, Object>> selectAllBranchByType(@PathVariable("type") String type, @RequestParam Double latitude, 
			@RequestParam Double longitude, @RequestParam String radius) {
		
		List<Branch> branch = new ArrayList<Branch>();
		
		if(latitude != 0 && longitude != 0) {
			branch = branchService.listByTypeBranch(type);
		} else {
			branch = branchService.listByTypeBranch(type);
		}

		

		Map<String, List<Branch>> response = new HashMap<>();

		response.put("branch", branch);

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", response, null);

	}

	@GetMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> selectById(@PathVariable("id") Long id) {

		Branch branch = new Branch();

		try {
			branch = branchService.listById(id);

		} catch (Exception e) {

			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Não foi encontrado nenhum lugar", null,
					new String[] { "Não foi encontrado nenhum lugar" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", branch, null);

	}
	
	@GetMapping("/establishment/{id}")
	public ResponseEntity<Map<Object, Object>> selectByEstablishment(@PathVariable("id") Long id) {

		List<Branch> branch = new ArrayList<Branch>();

		try {
			branch = branchService.listByEstablishment(id);

		} catch (Exception e) {

			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Não foi encontrado nenhum lugar", null,
					new String[] { "Não foi encontrado nenhum lugar" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", branch, null);

	}

	@PostMapping("/register")
	public ResponseEntity<Map<Object, Object>> registerBranch(@RequestBody BranchRegistration register) {

		List<Image> images;

		Branch branch = register.getBranch();
		List<UploadInput> uploadInput = register.getImages();
		UploadInput mainImage = register.getMainImage();

		try {

			images = firebaseStorage.uploadArray(uploadInput, "branch/");

			mainImage.setFilename(new Upload().generateNameHash(mainImage.getFilename()));

			branch.setImage(firebaseStorage.upload(mainImage, "branch/"));

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false,
					"Erro ao fazer o upload da imagem de perfil", null,
					new String[] { "Erro ao fazer o upload da imagem de perfil" });

		}

		branch.setImages(images);

		Branch branchCreated = new Branch();

		try {

			branchCreated = branchService.insert(branch);

		} catch (SQLIntegrityConstraintViolationException e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao inserir", null,
					new String[] { "Objeto Json mal formado", "Verifique os parâmetros enviados" });

		}

		return (ResponseService.apiResponse(HttpStatus.CREATED, true, "Cadastrado com sucesso!", branchCreated, null));

	}

	public ResponseEntity<Map<Object, Object>> deleteBranch(@PathVariable("id") Long id) {

		try {
			branchService.delete(id);

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, null, "Erro ao excluir a filial",
					new String[] { "Lugar não existente na base dados" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Excluído com sucesso", null, null);
	}

}
