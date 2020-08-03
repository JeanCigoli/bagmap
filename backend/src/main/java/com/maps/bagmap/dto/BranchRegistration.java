package com.maps.bagmap.dto;

import java.util.List;

import com.maps.bagmap.model.Branch;
import com.maps.bagmap.service.firebase.UploadInput;

public class BranchRegistration {

	private List<UploadInput> images;
	private Branch branch;
	private UploadInput mainImage;

	public List<UploadInput> getImages() {
		return images;
	}

	public void setImages(List<UploadInput> images) {
		this.images = images;
	}

	public Branch getBranch() {
		return branch;
	}

	public void setBranch(Branch branch) {
		this.branch = branch;
	}

	public UploadInput getMainImage() {
		return mainImage;
	}

	public void setMainImage(UploadInput mainImage) {
		this.mainImage = mainImage;
	}

}
