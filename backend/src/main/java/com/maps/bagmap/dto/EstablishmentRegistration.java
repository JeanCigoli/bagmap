package com.maps.bagmap.dto;

import com.maps.bagmap.model.Establishment;
import com.maps.bagmap.model.Person;
import com.maps.bagmap.model.UserEstablishment;
import com.maps.bagmap.service.firebase.UploadInput;

public class EstablishmentRegistration {

	private UploadInput image;
	private Establishment establishment;

	public UploadInput getImage() {
		return image;
	}

	public void setImage(UploadInput image) {
		this.image = image;
	}

	public Establishment getEstablishment() {
		return establishment;
	}

	public void setEstablishment(Establishment establishment) {
		this.establishment = establishment;
	}

}
