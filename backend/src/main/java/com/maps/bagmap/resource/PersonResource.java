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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.maps.bagmap.dto.UserAuthorization;
import com.maps.bagmap.dto.PersonRegistration;
import com.maps.bagmap.model.Person;
import com.maps.bagmap.service.PersonService;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.UserService;
import com.maps.bagmap.service.emails.SendEmail;
import com.maps.bagmap.service.firebase.FirebaseStorageService;
import com.maps.bagmap.service.firebase.UploadInput;
import com.maps.bagmap.utils.CryptoAES;
import com.maps.bagmap.utils.Upload;

@RestController
@CrossOrigin
@RequestMapping("/person")
public class PersonResource {

	@Autowired
	private PersonService personService;
	
	@Autowired
	private UserService userService;

	@Autowired
	private FirebaseStorageService firebaseStorage;
	
	@Autowired
	private SendEmail apiEmail;

	@GetMapping("/")
	public ResponseEntity<Map<Object, Object>> selectAllPerson() {

		List<Person> person = personService.listAll();

		Map<String, List<Person>> response = new HashMap<>();

		response.put("states", person);

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", response, null);

	}

	@GetMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> selectById(@PathVariable("id") Long id) {

		Person person = new Person();

		try {
			person = personService.listById(id);

		} catch (Exception e) {

			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro na listagem", null,
					new String[] { "Erro ao listar" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", person, null);

	}

	@PostMapping("/register")
	public ResponseEntity<Map<Object, Object>> registerPerson(@RequestBody PersonRegistration register) {

		String image;
		Upload uploadUtils = new Upload();

		Person person = register.getPerson();
		UploadInput uploadInput = register.getImage();
		
		if(uploadInput.getFilename() != "") {
			
			uploadInput.setFilename(uploadUtils.generateNameHash(uploadInput.getFilename()));

			try {

				image = firebaseStorage.upload(uploadInput, "users/");

			} catch (Exception e) {
				System.out.print(e);
				return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false,
						"Erro ao fazer o upload da imagem de perfil", null,
						new String[] { "Erro ao fazer o upload da imagem de perfil" });

			}
			
			person.setImage(image);
			
		}

		Person personCreated = new Person();

		try {

			personCreated = personService.insert(person);

		} catch (SQLIntegrityConstraintViolationException e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao inserir", null,
					new String[] { "Objeto Json mal formado", "Verifique os parâmetros enviados" });

		}

		person.setAddress(null);
		person.setRoles(null);

		
		if(personCreated.isAuthorization()) {
			
			try {
				apiEmail.emailsWelcome(person.getEmail(), person.getNamePerson());
			} catch (Exception e) {
				e.printStackTrace();
			}
			
		} else {
			
			ObjectMapper mapper = new ObjectMapper();
			String jsonString = null;
			
			try {
				jsonString = mapper.writeValueAsString(person);
				String userEncrypt = CryptoAES.encrypt(jsonString, "userAuthorization");

				apiEmail.emailsSendValidateEmail(person.getEmail(), person.getNamePerson(), userEncrypt);
						
			} catch (Exception e) {
				return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao enviar o e-mail", null,
						new String[] { "O usuário foi criado, mas ocorreu um erro ao enviar o e-mail" });
			} 
			
		}

		return (ResponseService.apiResponse(HttpStatus.CREATED, true, "Cadastrado com sucesso!", personCreated, null));

	}

	@PutMapping("/authorization")
	public ResponseEntity<Map<Object, Object>> updatePersonAuthorization(@RequestBody UserAuthorization auth) {

		String decrypt = CryptoAES.decrypt(auth.getToken(), "userAuthorization");

		ObjectMapper mapper = new ObjectMapper();
		Person person = new Person();

		try {
			
			person = mapper.readValue(decrypt, Person.class);
			
		} catch (JsonProcessingException e1) {
			e1.printStackTrace();
		}

		boolean success;

		try {

			success = userService.updateAuthorization(person.getIdUser(), person.getEmail());
			
			apiEmail.emailsWelcome(person.getEmail(), person.getNamePerson());

		} catch (Exception e) {

			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao atualizar usuário", null,
					new String[] { "Objeto Json mal informado", "Verifique os parâmetros informados" });

		}

		if (!success) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao confirmar o e-mail", null,
					new String[] { "Houve um erro ao confirmar o e-mail" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "E-mail confirmado com sucesso!", person, null);

	}

	@PutMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> updatePerson(@PathVariable("id") Long id, @RequestBody Person person) {

		person.setIdUser(id);
		Person resultPerson = new Person();

		try {

			resultPerson = personService.update(person);

		} catch (Exception e) {

			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao atualizar usuário", null,
					new String[] { "Objeto Json mal informado", "Verifque os parâmetros informados" });

		}

		if (resultPerson == null) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao atualizar usuário", null,
					new String[] { "Houve um erro ao tentar atualizar esse usuário" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Atualizado com sucesso!", resultPerson, null);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> deletePerson(@PathVariable("id") Long id) {

		try {
			personService.delete(id);

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, null, "Erro ao excluir usuário",
					new String[] { "Usuário não existente na base dados" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Excluído com sucesso", null, null);
	}
}
