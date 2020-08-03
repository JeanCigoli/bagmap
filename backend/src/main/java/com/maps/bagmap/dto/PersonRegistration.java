package com.maps.bagmap.dto;

import com.maps.bagmap.model.Person;
import com.maps.bagmap.service.firebase.UploadInput;

public class PersonRegistration {

	private UploadInput image;
	private Person person;

	public UploadInput getImage() {
		return image;
	}

	public void setImage(UploadInput image) {
		this.image = image;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}


}
