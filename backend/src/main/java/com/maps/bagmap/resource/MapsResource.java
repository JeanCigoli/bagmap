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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.maps.bagmap.dto.SearchMapDirection;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.maps.DirectionMapService;
import com.maps.bagmap.service.maps.DistanceMapService;
import com.maps.bagmap.service.maps.GeoMapService;
import com.maps.bagmap.service.maps.PlacesMapService;

@RestController
@CrossOrigin
@RequestMapping("/maps")
public class MapsResource {
	
	@Autowired
	PlacesMapService placeMapsService;
	
	@Autowired
	GeoMapService geoMapsService;
	
	@Autowired
	DirectionMapService directionMapsService;
	
	@Autowired
	DistanceMapService distanceMapsService;
	
	@GetMapping("/search")
	public ResponseEntity<Map<Object, Object>> selectAllPlaces(@RequestParam String place, @RequestParam String type, 
			@RequestParam Double latitude, @RequestParam Double longitude) {
		
		String places = null;
		
		try {
			
			 if (latitude != 0.0 && type != "") {
				places = placeMapsService.getPlacesByLocationByType(Double.valueOf(latitude), Double.valueOf(longitude), type);
			} else if(place != "" && type != "") {
				places = placeMapsService.getPlacesSearchType(place, type);
			} else if (place != "") {
				places = placeMapsService.getPlacesSearch(place);
			}
			
		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao encontrar os lugares", null,
					new String[] { "Erro ao encontrar os lugares", "Verifique os parâmetros enviados" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", places, null);

	}
	
	@GetMapping("/search/location")
	public ResponseEntity<Map<Object, Object>> selectAllPlacesByLocation( 
			@RequestParam Double latitude, @RequestParam Double longitude, @RequestParam String type, @RequestParam String search) {
		
		String places = null;
		
		try {
			
			if (search == "") {
				places = placeMapsService.getPlacesByLocationByType(latitude, longitude, type);
			} else {
				places = placeMapsService.getSearchAndLocation(search, latitude, longitude);
			}
		
		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao encontrar os lugares", null,
					new String[] { "Erro ao encontrar os lugares", "Verifique os parâmetros enviados" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", places, null);

	}
	
	@GetMapping("/search/address")
	public ResponseEntity<Map<Object, Object>> selectByAddress(@RequestParam String address) {
		
		String places = null;
		
		try {
			
			places = geoMapsService.getLocationByAddress(address);
			
		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao encontrar o endereço", null,
					new String[] { "Erro ao encontrar o endereço", "Verifique os parâmetros enviados" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", places, null);

	}
	
	@PostMapping("/direction")
	public ResponseEntity<Map<Object, Object>> selectDirection(@RequestBody SearchMapDirection location) {
		
		Map<String, String> response = new HashMap<>();
		
		try {
			
			String places = distanceMapsService.getDistanceByLocation(location);
			
			response.put("distance", places);
			
		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao encontrar as distâncias", null,
					new String[] { "Erro ao encontrar as distâncias", "Verifique os parâmetros enviados" });
		}

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", response, null);

	}
	
	@GetMapping("/search/{placeid}")
	public ResponseEntity<Map<Object, Object>> selectByPlaceId(@PathVariable String placeid) {
		
		String places = null;
		
		
		try {
			places = placeMapsService.getPlacesDetails(placeid);
		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao encontrar os lugares", null,
					new String[] { "Erro ao encontrar os lugares", "Verifique os parâmetros enviados" });
		}

		

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", places, null);

	}

}
