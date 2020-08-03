package com.maps.bagmap.service.exceptions;

public class UserBranchNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public UserBranchNotFoundException(String message) {
		super(message);
	}
}
