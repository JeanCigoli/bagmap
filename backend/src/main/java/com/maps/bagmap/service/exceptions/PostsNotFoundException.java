package com.maps.bagmap.service.exceptions;

public class PostsNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	
	public PostsNotFoundException (String message) {
		super(message);
	}

}
