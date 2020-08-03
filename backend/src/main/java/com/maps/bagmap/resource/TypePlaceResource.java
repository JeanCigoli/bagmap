package com.maps.bagmap.resource;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maps.bagmap.model.TypePlace;
import com.maps.bagmap.service.TypePlaceService;
import com.maps.bagmap.service.ResponseService;

@RestController
@CrossOrigin
@RequestMapping("/type/place")
public class TypePlaceResource {
	
	@Autowired
	TypePlaceService typePlaceService;
	
	@GetMapping
	public ResponseEntity<Map<Object, Object>> listAll() {
		
		try {
			List<TypePlace> types = typePlaceService.listAll();
			
			Map<String, List<TypePlace>> response = new HashMap<>();
			
			response.put("types", types);
			
			return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", response, null);
			
		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false,
					"Erro na listagem",
					null,
					new String[] {"Erro ao listar"});
		}
		
		
	}

}
