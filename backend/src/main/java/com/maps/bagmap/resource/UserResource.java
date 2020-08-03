package com.maps.bagmap.resource;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.maps.bagmap.dto.UserAuthorization;
import com.maps.bagmap.model.User;
import com.maps.bagmap.model.UserEstablishment;
import com.maps.bagmap.model.User;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.UserService;
import com.maps.bagmap.utils.CryptoAES;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserResource {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/email/{email}")
	public ResponseEntity<Map<Object, Object>> selectAllUser(@PathVariable String email) {

		User user = new User();
		
		try {
			user = userService.listByEmail(email);
		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.NO_CONTENT, false,
					"E-mail já está sendo utilizado", 
					null,
					new String[] { "E-mail já está sendo utilizado" });
		}
		
		

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", user, null);

	}
	
	@PutMapping("/authorization")
	public ResponseEntity<Map<Object, Object>> updateUserAuthorization(@RequestBody UserAuthorization auth) {

		String decrypt = CryptoAES.decrypt(auth.getToken(), "userAuthorization");

		ObjectMapper mapper = new ObjectMapper();
		User user = new User();

		try {
			
			user = mapper.readValue(decrypt, User.class);
			
		} catch (JsonProcessingException e1) {
			e1.printStackTrace();
		}

		boolean success;

		try {

			success = userService.updateAuthorization(user.getIdUser(), user.getEmail());

		} catch (Exception e) {

			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao atualizar usuário", null,
					new String[] { "Objeto Json mal informado", "Verifique os parâmetros informados" });

		}

		if (!success) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao confirmar o e-mail", null,
					new String[] { "Houve um erro ao confirmar o e-mail" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "E-mail confirmado com sucesso!", user, null);

	}

}
