package com.maps.bagmap.service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.Branch;
import com.maps.bagmap.model.PlaceRoad;
import com.maps.bagmap.model.Places;
import com.maps.bagmap.repository.PlaceRoadRepository;
import com.maps.bagmap.service.maps.PlacesMapService;

@Service
public class PlaceRoadService {
	
	@Autowired
	PlaceRoadRepository placeRoadRepository;
	
	@Autowired
	PlacesService placeService;
	
	@Autowired
	PlacesMapService placeMapsService;
	
	@Autowired
	BranchService branchService;
	
	public Map<String, Object> findAll(Long idRoad) {
		
		List<PlaceRoad> placesRoad = placeRoadRepository.findByRoadMap(idRoad);
		
		Map<String, Object> response = new HashMap<>();
		List<Map<String, Object>> places = new ArrayList<Map<String,Object>>();
		
		for(PlaceRoad place: placesRoad) {
			
			Map<String, Object> map = new HashMap<>();
			
			if(place.getTypeIdPlace().equals("google")) {
				
				String placeMap = placeMapsService.getPlacesDetails(place.getIdPlace());
				
				System.out.println(placeMap);
				
				map.put("place", placeMap);
				map.put("road", place);
				
			} else if (place.getTypeIdPlace().equals("place")) {
				
				Places placeUser = placeService.listById(Long.parseLong(place.getIdPlace()));
				
				map.put("place", placeUser);
				map.put("road", place);
				
			} else if (place.getTypeIdPlace().equals("branch")){
				
				Branch branch = branchService.listById(Long.parseLong(place.getIdPlace()));
				
				map.put("place", branch);
				map.put("road", place);
			}
			
			places.add(map);
		}
		
		response.put("places", places);
		
		return response;
		
	}
	
	public List<PlaceRoad> insert(List<PlaceRoad> places) throws SQLIntegrityConstraintViolationException {

		return placeRoadRepository.saveAll(places);

	}

}
