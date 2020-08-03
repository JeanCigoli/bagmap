package com.maps.bagmap.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maps.bagmap.model.Posts;

public interface PostsRepository extends JpaRepository<Posts, Long> {

}
