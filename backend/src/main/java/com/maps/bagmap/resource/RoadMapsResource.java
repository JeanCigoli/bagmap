package com.maps.bagmap.resource;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maps.bagmap.dto.RoadMapsRegistration;
import com.maps.bagmap.model.Image;
import com.maps.bagmap.model.RoadMaps;
import com.maps.bagmap.service.RoadMapsService;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.emails.SendEmail;
import com.maps.bagmap.service.firebase.FirebaseStorageService;
import com.maps.bagmap.service.firebase.UploadInput;
import com.maps.bagmap.utils.Upload;

@RestController
@CrossOrigin
@RequestMapping("/roadmaps")
public class RoadMapsResource {

	@Autowired
	private RoadMapsService roadMapsService;

	@Autowired
	private FirebaseStorageService firebaseStorage;

	@Autowired
	private SendEmail apiEmail;

	@GetMapping("/user/{id}")
	public ResponseEntity<Map<Object, Object>> selectAllRoadMaps(@PathVariable("id") Long id) {

		List<RoadMaps> roadMaps = roadMapsService.listAll(id);

		Map<String, List<RoadMaps>> response = new HashMap<>();

		response.put("roadMaps", roadMaps);

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", response, null);

	}

	@GetMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> selectById(@PathVariable("id") Long id) {

		RoadMaps roadMaps = new RoadMaps();

		try {
			roadMaps = roadMapsService.listById(id);

		} catch (Exception e) {

			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Não foi encontrado nenhum lugar", null,
					new String[] { "Não foi encontrado nenhum lugar" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", roadMaps, null);

	}

	@PostMapping("/register")
	public ResponseEntity<Map<Object, Object>> registerRoadMaps(@RequestBody RoadMapsRegistration register) {

		RoadMaps roadMaps = register.getRoadMaps();
		UploadInput mainImage = register.getImage();

		try {

			mainImage.setFilename(new Upload().generateNameHash(mainImage.getFilename()));
			
			roadMaps.setBanner(firebaseStorage.upload(mainImage, "roadMaps/"));

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false,
					"Erro ao fazer o upload da imagem de perfil", null,
					new String[] { "Erro ao fazer o upload da imagem de perfil" });

		}

		RoadMaps roadMapsCreated = new RoadMaps();

		try {

			roadMapsCreated = roadMapsService.insert(roadMaps);
			
			//apiEmail.emailsSendValidateEmail(roadMaps.getName());

		} catch (SQLIntegrityConstraintViolationException e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao inserir", null,
					new String[] { "Objeto Json mal formado", "Verifique os parâmetros enviados" });

		}


		return (ResponseService.apiResponse(HttpStatus.CREATED, true, "Cadastrado com sucesso!", roadMapsCreated, null));

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> deleteRoadMaps(@PathVariable("id") Long id) {

		try {
			roadMapsService.delete(id);

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, null, "Erro ao excluir usuário",
					new String[] { "Lugar não existente na base dados" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Excluído com sucesso", null, null);
	}

}
