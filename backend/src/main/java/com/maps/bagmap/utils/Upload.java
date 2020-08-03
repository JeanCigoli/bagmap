package com.maps.bagmap.utils;

import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Calendar;

import com.google.common.hash.Hashing;

public class Upload {

	public String now() {
		Calendar cal = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return sdf.format(cal.getTime());
	}

	public String generateNameHash(String name) {

		String extension = getFileExtension(name);

		String sha256hex = Hashing.sha256().hashString(name + now(), StandardCharsets.UTF_8).toString();

		return sha256hex + extension;
	}

	private String getFileExtension(String name) {
		int lastIndexOf = name.lastIndexOf(".");
		if (lastIndexOf == -1) {
			return "";
		}
		return name.substring(lastIndexOf);
	}

	public byte[] separatorBase64(String data) {

		String partSeparator = ",";

		if (data.contains(partSeparator)) {
			String encodedImg = data.split(partSeparator)[1];
			byte[] decodedImg = Base64.getDecoder().decode(encodedImg.getBytes(StandardCharsets.UTF_8));
			return decodedImg;
		}

		return null;

	}

}
