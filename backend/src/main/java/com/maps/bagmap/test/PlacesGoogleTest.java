package com.maps.bagmap.test;

import com.maps.bagmap.dto.SearchPlace;
import com.maps.bagmap.service.maps.PlacesMapService;

public class PlacesGoogleTest {
	
	
	public static void main(String[] args) {

		PlacesMapService placesServices = new PlacesMapService();
		
		//"latitude":-23.4998629,"longitude":-46.8543619
		
		String placeResponse = placesServices.getPlacesByLocationByType(-23.4998629, -46.8543619, "restaurant");
		
		//String placeResponse = placesServices.getPlacesSearch("Acampamentos");
		
		//String placeResponse = placesServices.getPlacesSearchType("Museu de Arte", "museum");
		
		System.out.println(placeResponse);
		
		//String placeResposeId = placesServices.getPlacesDetails("ChIJrVgvRn1ZzpQRF3x74eJBUh4");
		
		
	}

}
