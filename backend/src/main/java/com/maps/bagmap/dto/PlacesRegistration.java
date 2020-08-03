package com.maps.bagmap.dto;

import java.util.List;

import com.maps.bagmap.model.Places;
import com.maps.bagmap.service.firebase.UploadInput;

public class PlacesRegistration {

	private List<UploadInput> images;
	private Places places;
	private UploadInput mainImage;

	public List<UploadInput> getImages() {
		return images;
	}

	public void setImages(List<UploadInput> images) {
		this.images = images;
	}

	public Places getPlaces() {
		return places;
	}

	public void setPlaces(Places places) {
		this.places = places;
	}

	public UploadInput getMainImage() {
		return mainImage;
	}

	public void setMainImage(UploadInput mainImage) {
		this.mainImage = mainImage;
	}

}
