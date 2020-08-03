package com.maps.bagmap.service.exceptions;

public class RoadMapsNotFoundException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;

	public RoadMapsNotFoundException(String message) {
		super(message);
	}

}
