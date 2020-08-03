package com.maps.bagmap.resource;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.maps.bagmap.dto.PlacesRegistration;
import com.maps.bagmap.dto.PostsRegistration;
import com.maps.bagmap.model.Image;
import com.maps.bagmap.model.ImagesPosts;
import com.maps.bagmap.model.Places;
import com.maps.bagmap.model.Posts;
import com.maps.bagmap.service.PostsService;
import com.maps.bagmap.service.ResponseService;
import com.maps.bagmap.service.firebase.FirebaseStorageService;
import com.maps.bagmap.service.firebase.UploadInput;
import com.maps.bagmap.utils.Upload;

@RestController
@CrossOrigin
@RequestMapping("/posts")
public class PostsResource {
	
	@Autowired
	private PostsService postsService;
	
	@Autowired
	private FirebaseStorageService firebaseStorage;
	
	@GetMapping
	public ResponseEntity<Map<Object, Object>> selectAllPlaces(@RequestParam int page, @RequestParam int size,
			@RequestParam String sort) {
		
		Pageable pagination = PageRequest.of(page, size, Direction.DESC, sort);

		Page<Posts> posts = postsService.listAll(pagination);

		return ResponseService.apiResponse(HttpStatus.OK, true, "Consulta concluída com sucesso", posts, null);

	}
	
	@PostMapping("/register")
	public ResponseEntity<Map<Object, Object>> registerPlaces(@RequestBody PostsRegistration register) {

		List<ImagesPosts> images;

		Posts posts = register.getPost();
		List<UploadInput> uploadInput = register.getImages();

		try {

			images = firebaseStorage.uploadPostsImage(uploadInput, "posts/");

		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false,
					"Erro ao fazer o upload da imagem de perfil", null,
					new String[] { "Erro ao fazer o upload da imagem de perfil" });

		}
		
		posts.setImages(images);

		Posts post = new Posts();

		try {

			post = postsService.insert(posts);

		} catch (SQLIntegrityConstraintViolationException e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, "Erro ao inserir", null,
					new String[] { "Objeto Json mal formado", "Verifique os parâmetros enviados" });

		}

		return ResponseService.apiResponse(HttpStatus.CREATED, true, "Cadastrado com sucesso!", post, null);

	}

}
