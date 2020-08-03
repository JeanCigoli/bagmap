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

import com.maps.bagmap.dto.SearchMapDirection;
import com.maps.bagmap.service.exceptions.PlacesNotFoundException;

@Service
public class DirectionMapService {

	private static final String API_KEY = "AIzaSyA0rCbU2sWm2eCABo99o32iawp8f2kJmVI";

	private static final String URL_ALL_LOCATION = "https://maps.googleapis.com/maps/api/directions/json?origin={lat},{lng}&destination={lat},{lng}&mode=transit&language=pt-BR"
			+ "&key=" + API_KEY;

	public String getDirections(SearchMapDirection location) {

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

		HttpEntity<String> request = new HttpEntity<String>(headers);

		ResponseEntity<String> response = restTemplate.exchange(URL_ALL_LOCATION, HttpMethod.GET, request, String.class,
				location.getOrigin().getLat(), location.getOrigin().getLng(), location.getDest().getLat(),
				location.getDest().getLng());

		if (response.getStatusCode() == HttpStatus.OK) {
			return response.getBody();
		} else {
			throw new PlacesNotFoundException("Distância não encontrada");
		}

	}

}
