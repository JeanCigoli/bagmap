package com.maps.bagmap.service.maps;

import java.util.Collections;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.maps.bagmap.dto.SearchDistanceAll;
import com.maps.bagmap.service.exceptions.PlacesNotFoundException;

@Service
public class GeoMapService {
	
private static final String API_KEY = "AIzaSyA0rCbU2sWm2eCABo99o32iawp8f2kJmVI";
	
	private static final String URL_ALL_LOCATION = "https://maps.googleapis.com/maps/api/geocode/json?address={address}&components=country:BR" + 
			"&key=" + API_KEY;
	
	public String getLocationByAddress(String address) {
		
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(MediaType.APPLICATION_JSON);
	    headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
		
	    HttpEntity<String> request = new HttpEntity<String>(headers);
	    
	    ResponseEntity<String> response = restTemplate.exchange(
	    		URL_ALL_LOCATION,
	            HttpMethod.GET,
	            request,
	            String.class,
	            address
	    );
		
	    if (response.getStatusCode() == HttpStatus.OK) {
			return response.getBody();
		} else {
			throw new PlacesNotFoundException("Lugares não encontrados");
		}
	    
	}


}
