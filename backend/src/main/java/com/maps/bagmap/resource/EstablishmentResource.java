package com.maps.bagmap.resource;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.maps.bagmap.dto.EstablishmentRegistration;
import com.maps.bagmap.model.Establishment;
import com.maps.bagmap.model.Person;
import com.maps.bagmap.repository.EstablishmentRepository;
import com.maps.bagmap.service.EstablishmentService;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.exceptions.EstablishmentNotFoundException;
import com.maps.bagmap.service.firebase.FirebaseStorageService;
import com.maps.bagmap.service.firebase.UploadInput;
import com.maps.bagmap.utils.Upload;

@RestController
@CrossOrigin
@RequestMapping("/establishment")
public class EstablishmentResource {
	
	@Autowired
	EstablishmentService establishmentService;
	
	@Autowired
	FirebaseStorageService firebaseStorage;
	
	@GetMapping("/")
	public ResponseEntity<Map<Object, Object>> selectAllPerson() {

		List<Establishment> establishment = establishmentService.listAll();

		Map<String, List<Establishment>> response = new HashMap<>();

		response.put("establishment", establishment);

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", response, null);

	}

	@GetMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> selectById(@PathVariable("id") Long id) {

		Establishment establishment = new Establishment();

		try {
			establishment = establishmentService.listById(id);

		} catch (Exception e) {

			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro na listagem", null,
					new String[] { "Erro ao listar" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", establishment, null);

	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<Map<Object, Object>> selectByUser(@PathVariable("id") Long id) {

		Establishment establishment = new Establishment();

		try {
			establishment = establishmentService.listByUser(id);

		} catch (EstablishmentNotFoundException e) {

			return ResponseService.apiResponse(HttpStatus.NO_CONTENT, false, "Não foi encontrado nenhum estabelecimento", null,
					new String[] { "Não foi encontrado nenhum estabelecimento" });
		} catch (Exception e) {

			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro na listagem", null,
					new String[] { "Erro ao listar" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", establishment, null);

	}
	
	@PostMapping("/register")
	public  ResponseEntity<Map<Object, Object>> registerUserProfessional(@RequestBody Establishment establishment){
		
		Establishment establishmentCreated = new Establishment();
		
		try {

			establishmentCreated = establishmentService.insert(establishment);

		} catch (SQLIntegrityConstraintViolationException e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao inserir", null,
					new String[] { "Objeto Json mal formado", "Verifique os parâmetros enviados" });

		}
		
		return (ResponseService.apiResponse(HttpStatus.CREATED, true, "Cadastrado com sucesso!", establishmentCreated, null));
		
	}


}
