package com.maps.bagmap.model.emails;

public class Payload {
	
	private UserEmail user;
	
	private String token;

	public UserEmail getUser() {
		return user;
	}

	public void setUser(UserEmail user) {
		this.user = user;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
}
