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

import com.maps.bagmap.service.exceptions.PlacesNotFoundException;

@Service
public class PlacesMapService {

	private static final String API_KEY = "AIzaSyA0rCbU2sWm2eCABo99o32iawp8f2kJmVI";
	
	private static final String URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query={search}&location={lat},{lng}&radius=2000&key="
			+ API_KEY;
	
	private static final String URL_DETAILS = "https://maps.googleapis.com/maps/api/place/details/json?place_id={placeId}&language=pt-BR&key="
			+ API_KEY;
	
	private static final String URL_DETAILS_FILTER = "https://maps.googleapis.com/maps/api/place/details/json?place_id={placeId}&fields=name,geometry,formatted_address,icon,types&language=pt-BR&key="
			+ API_KEY;

	private static final String URL_PLACES = "https://maps.googleapis.com/maps/api/place/textsearch/json?query={place}&fields=name,geometry,photos,icon,place_id,types&language=pt-BR&key="
			+ API_KEY;
	
	private static final String URL_PLACES_TYPE = "https://maps.googleapis.com/maps/api/place/textsearch/json?query={place}&type={type}&key="
			+ API_KEY;

	private static final String URL_ALL_LOCATION = "https://maps.googleapis.com/maps/api/place/textsearch/json?location={lat},{longi}&radius=10000&type={type}&language=pt-BR&keyword=cruise&key="
			+ API_KEY;

	public String getPlacesByLocationByType(Double lat, Double longi, String type) {

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

		HttpEntity<String> request = new HttpEntity<String>(headers);

		ResponseEntity<String> response = restTemplate.exchange(URL_ALL_LOCATION, HttpMethod.GET, request, String.class,
				lat, longi, type);

		if (response.getStatusCode() == HttpStatus.OK) {
			return response.getBody();
		} else {
			throw new PlacesNotFoundException("Lugares não encontrados");
		}

	}
	
	public String getSearchAndLocation(String search, Double lat, Double lng) {

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

		HttpEntity<String> request = new HttpEntity<String>(headers);

		ResponseEntity<String> response = restTemplate.exchange(URL, HttpMethod.GET, request, String.class,
				search, lat, lng);

		if (response.getStatusCode() == HttpStatus.OK) {
			return response.getBody();
		} else {
			throw new PlacesNotFoundException("Lugares não encontrados");
		}

	}

	public String getPlacesSearch(String place) {

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

		HttpEntity<String> request = new HttpEntity<String>(headers);

		ResponseEntity<String> response = restTemplate.exchange(URL_PLACES, HttpMethod.GET, request, String.class,
				place);

		if (response.getStatusCode() == HttpStatus.OK) {
			return response.getBody();
		} else {
			throw new PlacesNotFoundException("Lugares não encontrados");
		}

	}
	
	public String getPlacesSearchType(String place, String type) {

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

		HttpEntity<String> request = new HttpEntity<String>(headers);

		ResponseEntity<String> response = restTemplate.exchange(URL_PLACES_TYPE, HttpMethod.GET, request, String.class,
				place, type);

		if (response.getStatusCode() == HttpStatus.OK) {
			return response.getBody();
		} else {
			throw new PlacesNotFoundException("Lugares não encontrados");
		}

	}

	public String getPlacesDetails(String placeId) {

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

		HttpEntity<String> request = new HttpEntity<String>(headers);

		ResponseEntity<String> response = restTemplate.exchange(URL_DETAILS, HttpMethod.GET, request, String.class,
				placeId);

		if (response.getStatusCode() == HttpStatus.OK) {
			return response.getBody();
		} else {
			throw new PlacesNotFoundException("Lugares não encontrados");
		}
	}
	
	public String getPlacesFilter(String placeId) {

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

		HttpEntity<String> request = new HttpEntity<String>(headers);

		ResponseEntity<String> response = restTemplate.exchange(URL_DETAILS_FILTER, HttpMethod.GET, request, String.class,
				placeId);

		if (response.getStatusCode() == HttpStatus.OK) {
			return response.getBody();
		} else {
			throw new PlacesNotFoundException("Lugares não encontrados");
		}
	}

}
