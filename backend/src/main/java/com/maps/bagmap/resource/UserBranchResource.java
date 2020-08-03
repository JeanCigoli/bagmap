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

import com.fasterxml.jackson.databind.ObjectMapper;
import com.maps.bagmap.dto.UserBranchRegistration;
import com.maps.bagmap.model.UserBranch;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.UserBranchService;
import com.maps.bagmap.service.emails.SendEmail;
import com.maps.bagmap.service.firebase.FirebaseStorageService;
import com.maps.bagmap.service.firebase.UploadInput;
import com.maps.bagmap.utils.CryptoAES;
import com.maps.bagmap.utils.Upload;

@RestController
@CrossOrigin
@RequestMapping("/user/branch")
public class UserBranchResource {

	@Autowired
	private UserBranchService userBranchService;

	@Autowired
	private FirebaseStorageService firebaseStorage;

	@Autowired
	private SendEmail apiEmail;

	@GetMapping("/")
	public ResponseEntity<Map<Object, Object>> selectAllUser() {

		List<UserBranch> user = userBranchService.listAll();

		Map<String, List<UserBranch>> response = new HashMap<>();

		response.put("users", user);

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", response, null);

	}

	@GetMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> selectById(@PathVariable("id") Long id) {

		UserBranch user = new UserBranch();

		try {
			user = userBranchService.listById(id);

		} catch (Exception e) {

			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro na listagem", null,
					new String[] { "Erro ao listar" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", user, null);

	}

	@PostMapping("/register")
	public ResponseEntity<Map<Object, Object>> registerUser(@RequestBody UserBranchRegistration register) {

		String image;
		Upload uploadUtils = new Upload();

		UserBranch user = register.getUserBranch();
		UploadInput uploadInput = register.getImage();

		uploadInput.setFilename(uploadUtils.generateNameHash(uploadInput.getFilename()));

		try {

			image = firebaseStorage.upload(uploadInput, "userBranch/");

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false,
					"Erro ao fazer o upload da imagem de perfil", null,
					new String[] { "Erro ao fazer o upload da imagem de perfil" });

		}

		user.setImage(image);

		UserBranch userCreated = new UserBranch();

		try {

			userCreated = userBranchService.insert(user);

		} catch (SQLIntegrityConstraintViolationException e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao inserir", null,
					new String[] { "Objeto Json mal formado", "Verifique os parâmetros enviados" });

		}

		user.setRoles(null);

		ObjectMapper mapper = new ObjectMapper();
		String jsonString = null;

		try {
			jsonString = mapper.writeValueAsString(user);
			String userEncrypt = CryptoAES.encrypt(jsonString, "userAuthorization");

			apiEmail.emailsSendValidateEmail(user.getEmail(), user.getNameUserBranch(), userEncrypt);

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao enviar o e-mail", null,
					new String[] { "O usuário foi criado, mas ocorreu um erro ao enviar o e-mail" });
		}

		return (ResponseService.apiResponse(HttpStatus.CREATED, true, "Cadastrado com sucesso!", userCreated, null));

	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> deleteUser(@PathVariable("id") Long id) {

		try {
			userBranchService.delete(id);

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, null, "Erro ao excluir usuário",
					new String[] { "Usuário não existente na base dados" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Excluído com sucesso", null, null);
	}

}
