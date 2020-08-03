package com.maps.bagmap.resource;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RestController;

import com.maps.bagmap.dto.RoadMapsRegistration;
import com.maps.bagmap.model.PlaceRoad;
import com.maps.bagmap.model.RoadMaps;
import com.maps.bagmap.service.PlaceRoadService;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.RoadMapsService;
import com.maps.bagmap.service.firebase.FirebaseStorageService;
import com.maps.bagmap.service.firebase.UploadInput;
import com.maps.bagmap.utils.Upload;

@RestController
@CrossOrigin
@RequestMapping("/placeroad")
public class PlaceRoadResource {
	
	@Autowired
	PlaceRoadService placeRoadService;

	
	@GetMapping("/road/{id}")
	public ResponseEntity<Map<Object, Object>> selectAllPlacesRoad(@PathVariable("id") Long id) {
		
		Map<String, Object> placesRoad = null;
		
		try {
			
			placesRoad = placeRoadService.findAll(id);
			
		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao encontrar os lugares deste roteiro", null,
					new String[] { "Erro ao encontrar os lugares deste roteiro", "Verifique os parâmetros enviados" });
		}


		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", placesRoad, null);

	}
	
	@PostMapping("/register")
	public ResponseEntity<Map<Object, Object>> registerRoadMaps(@RequestBody List<PlaceRoad> places) {
		
		List<PlaceRoad> placeMapsCreated = new ArrayList<PlaceRoad>();
		Map<String, List<PlaceRoad>> response = new HashMap<>();

		try {

			placeMapsCreated = placeRoadService.insert(places);
			response.put("placesRoad", placeMapsCreated);

		} catch (SQLIntegrityConstraintViolationException e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao inserir", null,
					new String[] { "Objeto Json mal formado", "Verifique os parâmetros enviados" });

		}


		return (ResponseService.apiResponse(HttpStatus.CREATED, true, "Cadastrado com sucesso!", placeMapsCreated, null));

	}

}
