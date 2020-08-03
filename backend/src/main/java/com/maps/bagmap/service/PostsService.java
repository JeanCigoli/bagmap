package com.maps.bagmap.service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.maps.bagmap.repository.PostsRepository;
import com.maps.bagmap.model.Posts;

@Service
public class PostsService {
	
	@Autowired
	PostsRepository postsRepository;
	
	public Page<Posts> listAll(Pageable pagination) {
		
		return postsRepository.findAll(pagination);
		
	}
	
	public Posts insert(Posts post) throws SQLIntegrityConstraintViolationException {

		return postsRepository.save(post);

	}

}
