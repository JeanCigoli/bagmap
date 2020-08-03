package com.maps.bagmap.service.exceptions;

public class PlacesNotFoundException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;

	public PlacesNotFoundException(String message) {
		super(message);
	}

}
