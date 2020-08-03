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

import com.maps.bagmap.model.City;
import com.maps.bagmap.model.State;
import com.maps.bagmap.service.CityService;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.StateService;

@RestController
@CrossOrigin
@RequestMapping("/states")
public class StateResource {
	
	@Autowired
	StateService stateService;
	
	@Autowired
	CityService cityService;
	
	@GetMapping
	@Cacheable(value = "listStates")
	public ResponseEntity<Map<Object, Object>> listAll() {
		
		try {
			List<State> states = stateService.listAll();
			
			Map<String, List<State>> response = new HashMap<>();
			
			response.put("states", states);
			
			return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", response, null);
			
		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false,
					"Erro na listagem",
					null,
					new String[] {"Erro ao listar"});
		}
		
		
	}
	
	@GetMapping("/{id}/cities") 
	public ResponseEntity<Map<Object, Object>> listOneAndCity(@PathVariable Long id) {
		
		try {
			List<City> cities = cityService.listAllByState(id);
			
			Map<String, List<City>> response = new HashMap<>();
			
			response.put("cities", cities);
			
			return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", response, null);
			
		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false,
					"Erro na listagem",
					null,
					new String[] {e.getMessage()});
		}
		
		
	}

}
