package com.maps.bagmap.dto;

import com.maps.bagmap.model.Person;
import com.maps.bagmap.model.UserEstablishment;
import com.maps.bagmap.service.firebase.UploadInput;

public class UserEstablishmentRegistration {

	private UploadInput image;
	private UserEstablishment userEstablishment;

	public UploadInput getImage() {
		return image;
	}

	public void setImage(UploadInput image) {
		this.image = image;
	}

	public UserEstablishment getUserEstablishment() {
		return userEstablishment;
	}

	public void setUserEstablishment(UserEstablishment userEstablishment) {
		this.userEstablishment = userEstablishment;
	}

}
