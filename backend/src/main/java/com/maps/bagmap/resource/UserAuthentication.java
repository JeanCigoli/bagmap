package com.maps.bagmap.resource;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maps.bagmap.dto.UserAccountCredential;
import com.maps.bagmap.dto.UserGoogleCredential;
import com.maps.bagmap.model.User;
import com.maps.bagmap.security.JwtAuthenticationService;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class UserAuthentication {

	
	@Autowired
	private JwtAuthenticationService jwtService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/authenticate")
	public ResponseEntity<Map<Object, Object>> signIn(@RequestBody UserAccountCredential credential) {

		UsernamePasswordAuthenticationToken userCredencial = new UsernamePasswordAuthenticationToken(
				credential.getUsername(),
				credential.getPassword()
				);
		
		User user = new User();
		
		try {
			
			user = userService.listByUsername(credential.getUsername());
			
			if(!user.isAuthorization()) {
				return ResponseService.apiResponse(HttpStatus.FORBIDDEN, false,
						"E-mail não está confirmado", 
						null,
						new String[] { "Por favor confirme seu e-mail" });
			}
			
			authenticationManager.authenticate(userCredencial);
			
		} catch (Exception e) {
			
			return ResponseService.apiResponse(HttpStatus.NOT_FOUND, false,
							"Autenticação deu erro", 
							null,
							new String[] { "Usuário ou senha estão incorretos" });
			
		}
		
		String token = jwtService.createToken(credential.getUsername(), user.getRoles());
		
		Map<Object, Object> jsonReponse = new HashMap<>();

		jsonReponse.put("user", user);
		jsonReponse.put("token", token);
		
		return ResponseService.apiResponse(HttpStatus.OK, true,
						"Autenticação Concluída", 
						jsonReponse,
						null);
				

	}
	
	@PostMapping("/authenticate/google")
	public ResponseEntity<Map<Object, Object>> signInGoogle(@RequestBody UserGoogleCredential credential) {
		
		User user = new User();
		
		try {
			
			user = userService.listByUidAndEmail(credential.getUid(), credential.getEmail());
			
			if(!user.isAuthorization()) {
				return ResponseService.apiResponse(HttpStatus.FORBIDDEN, false,
						"E-mail não está confirmado", 
						null,
						new String[] { "Por favor confirme seu e-mail" });
			}
			
		} catch (Exception e) {
			
			return ResponseService.apiResponse(HttpStatus.NOT_FOUND, false,
							"Autenticação deu erro", 
							null,
							new String[] { "Usuário não foi encontrado, complete o seu cadastro!" });
			
		}
		
		String token = jwtService.createToken(user.getUsername(), user.getRoles());
		
		Map<Object, Object> jsonReponse = new HashMap<>();

		jsonReponse.put("user", user);
		jsonReponse.put("token", token);
		
		return ResponseService.apiResponse(HttpStatus.OK, true,
						"Autenticação Concluída", 
						jsonReponse,
						null);
	}
	
}
