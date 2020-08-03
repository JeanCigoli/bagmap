package com.maps.bagmap.resource;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.maps.bagmap.dto.UserAuthorization;
import com.maps.bagmap.dto.UserEstablishmentAuthorization;
import com.maps.bagmap.dto.UserEstablishmentRegistration;
import com.maps.bagmap.model.User;
import com.maps.bagmap.model.UserEstablishment;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.UserEstablishmentService;
import com.maps.bagmap.service.UserService;
import com.maps.bagmap.service.emails.SendEmail;
import com.maps.bagmap.service.firebase.FirebaseStorageService;
import com.maps.bagmap.service.firebase.UploadInput;
import com.maps.bagmap.utils.CryptoAES;
import com.maps.bagmap.utils.Upload;

import io.grpc.netty.shaded.io.netty.util.internal.ThreadLocalRandom;

@RestController
@CrossOrigin
@RequestMapping("/user/establishment")
public class UserEstablishmentResource {

	@Autowired
	private UserEstablishmentService userEstablishmentService;
	
	@Autowired
	private UserService userService;

	@Autowired
	private FirebaseStorageService firebaseStorage;

	@Autowired
	private SendEmail apiEmail;

	@GetMapping("/")
	public ResponseEntity<Map<Object, Object>> selectAllUser() {

		List<UserEstablishment> user = userEstablishmentService.listAll();

		Map<String, List<UserEstablishment>> response = new HashMap<>();

		response.put("users", user);

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", response, null);

	}

	@GetMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> selectById(@PathVariable("id") Long id) {

		UserEstablishment user = new UserEstablishment();

		try {
			user = userEstablishmentService.listById(id);

		} catch (Exception e) {

			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro na listagem", null,
					new String[] { "Erro ao listar" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", user, null);

	}

	@PostMapping("/register")
	public ResponseEntity<Map<Object, Object>> registerUser(@RequestBody UserEstablishmentRegistration register) {

		String image;
		Upload uploadUtils = new Upload();

		UserEstablishment user = register.getUserEstablishment();
		UploadInput uploadInput = register.getImage();

		uploadInput.setFilename(uploadUtils.generateNameHash(uploadInput.getFilename()));

		try {

			image = firebaseStorage.upload(uploadInput, "userEstablishment/");

		} catch (Exception e) {
			System.out.println(e);
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false,
					"Erro ao fazer o upload da imagem de perfil", null,
					new String[] { "Erro ao fazer o upload da imagem de perfil" });

		}

		user.setImage(image);
		
		ThreadLocalRandom.current().nextInt(100, 999);
		
		String code = String.valueOf(ThreadLocalRandom.current().nextInt(100, 999));
		
		user.setCode(code);

		UserEstablishment userCreated = new UserEstablishment();

		try {

			userCreated = userEstablishmentService.insert(user);

		} catch (SQLIntegrityConstraintViolationException e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao inserir", null,
					new String[] { "Objeto Json mal formado", "Verifique os parâmetros enviados" });

		}

		user.setRoles(null);

		try {

			apiEmail.emailsSendValidateCode(user.getEmail(), user.getNameUserEstablishment(), code);

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao enviar o e-mail", null,
					new String[] { "O usuário foi criado, mas ocorreu um erro ao enviar o e-mail" });
		}

		return (ResponseService.apiResponse(HttpStatus.CREATED, true, "Cadastrado com sucesso!", userCreated, null));

	}
	
	@PutMapping("/authorization")
	public ResponseEntity<Map<Object, Object>> updateUserAuthorization(@RequestBody UserEstablishmentAuthorization auth) {
		
		UserEstablishment user = new UserEstablishment();
		
		try {
			
			user = userEstablishmentService.listByEmailAndCode(auth.getEmail(), auth.getCode());
			
		} catch (Exception e) {
			System.out.println(e);
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao atualizar usuário", null,
					new String[] { "O code está errado", "Verifique os parâmetros informados" });
		}


		boolean success;

		try {

			success = userService.updateAuthorization(user.getIdUser(), user.getEmail());

		} catch (Exception e) {
			System.out.println(e);
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao atualizar usuário", null,
					new String[] { "Objeto Json mal informado", "Verifique os parâmetros informados" });

		}

		if (!success) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao confirmar o e-mail", null,
					new String[] { "Houve um erro ao confirmar o e-mail" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "E-mail confirmado com sucesso!", user, null);

	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> deleteUser(@PathVariable("id") Long id) {

		try {
			userEstablishmentService.delete(id);

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, null, "Erro ao excluir usuário",
					new String[] { "Usuário não existente na base dados" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Excluído com sucesso", null, null);
	}

}
