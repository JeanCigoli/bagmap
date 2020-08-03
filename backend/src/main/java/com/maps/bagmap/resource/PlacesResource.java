package com.maps.bagmap.resource;

import java.sql.SQLIntegrityConstraintViolationException;
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
import org.springframework.web.bind.annotation.RestController;

import com.maps.bagmap.dto.PlacesRegistration;
import com.maps.bagmap.model.Image;
import com.maps.bagmap.model.Places;
import com.maps.bagmap.service.PlacesService;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.emails.SendEmail;
import com.maps.bagmap.service.firebase.FirebaseStorageService;
import com.maps.bagmap.service.firebase.UploadInput;
import com.maps.bagmap.utils.Upload;

@RestController
@CrossOrigin
@RequestMapping("/places")
public class PlacesResource {

	@Autowired
	private PlacesService placesService;

	@Autowired
	private FirebaseStorageService firebaseStorage;

	@Autowired
	private SendEmail apiEmail;

	@GetMapping("/")
	public ResponseEntity<Map<Object, Object>> selectAllPlaces(Pageable pageable) {

		Page<Places> places = placesService.listAll(pageable);

		Map<String, Page<Places>> response = new HashMap<>();

		response.put("places", places);

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", response, null);

	}

	@GetMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> selectById(@PathVariable("id") Long id) {

		Places places = new Places();

		try {
			places = placesService.listById(id);

		} catch (Exception e) {

			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Não foi encontrado nenhum lugar", null,
					new String[] { "Não foi encontrado nenhum lugar" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", places, null);

	}

	@PostMapping("/register")
	public ResponseEntity<Map<Object, Object>> registerPlaces(@RequestBody PlacesRegistration register) {

		List<Image> images;

		Places places = register.getPlaces();
		List<UploadInput> uploadInput = register.getImages();
		UploadInput mainImage = register.getMainImage();

		try {

			images = firebaseStorage.uploadArray(uploadInput, "places/");
			
			mainImage.setFilename(new Upload().generateNameHash(mainImage.getFilename()));
			
			places.setImage(firebaseStorage.upload(mainImage, "places/"));

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false,
					"Erro ao fazer o upload da imagem de perfil", null,
					new String[] { "Erro ao fazer o upload da imagem de perfil" });

		}
		
		// places.setImages(images);

		Places placesCreated = new Places();

		try {

			placesCreated = placesService.insert(places);
			
			//apiEmail.emailsSendValidateEmail(places.getName());

		} catch (SQLIntegrityConstraintViolationException e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao inserir", null,
					new String[] { "Objeto Json mal formado", "Verifique os parâmetros enviados" });

		}


		return (ResponseService.apiResponse(HttpStatus.CREATED, true, "Cadastrado com sucesso!", placesCreated, null));

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Map<Object, Object>> deletePlaces(@PathVariable("id") Long id) {

		try {
			placesService.delete(id);

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, null, "Erro ao excluir usuário",
					new String[] { "Lugar não existente na base dados" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Excluído com sucesso", null, null);
	}

}
