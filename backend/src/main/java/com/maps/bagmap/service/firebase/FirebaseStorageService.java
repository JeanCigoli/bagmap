package com.maps.bagmap.service.firebase;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.Acl;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.Bucket;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import com.google.firebase.cloud.StorageClient;
import com.maps.bagmap.model.Image;
import com.maps.bagmap.model.ImagesPosts;
import com.maps.bagmap.utils.Upload;

@Service
public class FirebaseStorageService {
	
	@PostConstruct
	public void init() throws IOException {

		if (FirebaseApp.getApps().isEmpty()) {

			InputStream dataAuthFirebase = FirebaseStorageService.class.getResourceAsStream("/bagmap-firebase.json");

			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(dataAuthFirebase))
					.setStorageBucket("bagmap-b8146.appspot.com").setDatabaseUrl("https://bagmap-b8146.firebaseio.com")
					.build();

			FirebaseApp.initializeApp(options);

		}

	}

	public String upload(UploadInput uploadInput, String folder) throws Exception {
		
		Upload uploadTools = new Upload();

		Bucket bucket = StorageClient.getInstance().bucket();

		byte[] bytes = uploadTools.separatorBase64(uploadInput.getBase64());
		
		if(bytes != null) {
			String filename = uploadInput.getFilename();
			String mimeType = uploadInput.getMimeType();

			Blob arquivo = bucket.create(folder + filename, bytes, mimeType);
			
			arquivo.createAcl(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER));

			return String.format("https://storage.googleapis.com/%s/%s", bucket.getName(), folder + filename);
		}
		
		throw new Exception("Não pode faxer o upload"); 
	}
	
	public List<Image> uploadArray(List<UploadInput> uploadInputs, String folder) {
		
		List<Image> images = new ArrayList<Image>();
		
		Upload uploadUtils = new Upload();
		
		for(UploadInput upload: uploadInputs) {
			
			upload.setFilename(uploadUtils.generateNameHash(upload.getFilename()));
			Image image = new Image();
			
			try {
			
				String link = upload(upload, folder);
				
				image.setLink(link);
				
				images.add(image);
				
			} catch (Exception e) {
				
			}
			
		}
		
		return images;
		
	}
	
	public List<ImagesPosts> uploadPostsImage(List<UploadInput> uploadInputs, String folder) {
		
		List<ImagesPosts> images = new ArrayList<ImagesPosts>();
		
		Upload uploadUtils = new Upload();
		
		for(UploadInput upload: uploadInputs) {
			
			upload.setFilename(uploadUtils.generateNameHash(upload.getFilename()));
			ImagesPosts image = new ImagesPosts();
			
			try {
			
				String link = upload(upload, folder);
				
				image.setLink(link);
				
				images.add(image);
				
			} catch (Exception e) {
				
			}
			
		}
		
		return images;
		
	}

}
