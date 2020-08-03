package com.maps.bagmap.dto;

import com.maps.bagmap.model.RoadMaps;
import com.maps.bagmap.service.firebase.UploadInput;

public class RoadMapsRegistration {

	private UploadInput image;
	private RoadMaps roadMaps;

	public UploadInput getImage() {
		return image;
	}

	public void setImage(UploadInput image) {
		this.image = image;
	}

	public RoadMaps getRoadMaps() {
		return roadMaps;
	}

	public void setRoadMaps(RoadMaps roadMaps) {
		this.roadMaps = roadMaps;
	}

}
