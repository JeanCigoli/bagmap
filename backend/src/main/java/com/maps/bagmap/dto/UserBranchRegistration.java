package com.maps.bagmap.dto;

import com.maps.bagmap.model.UserBranch;
import com.maps.bagmap.service.firebase.UploadInput;

public class UserBranchRegistration {

	private UploadInput image;
	private UserBranch userBranch;

	public UploadInput getImage() {
		return image;
	}

	public void setImage(UploadInput image) {
		this.image = image;
	}

	public UserBranch getUserBranch() {
		return userBranch;
	}

	public void setUserBranch(UserBranch userBranch) {
		this.userBranch = userBranch;
	}

}
