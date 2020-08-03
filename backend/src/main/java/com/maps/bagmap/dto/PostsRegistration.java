package com.maps.bagmap.dto;

import java.util.List;

import com.maps.bagmap.model.Posts;
import com.maps.bagmap.service.firebase.UploadInput;

public class PostsRegistration {

	private List<UploadInput> images;
	private Posts post;

	public List<UploadInput> getImages() {
		return images;
	}

	public void setImages(List<UploadInput> images) {
		this.images = images;
	}

	public Posts getPost() {
		return post;
	}

	public void setPost(Posts post) {
		this.post = post;
	}

}
