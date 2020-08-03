package com.maps.bagmap.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.maps.bagmap.model.Places;

public interface PlacesRepository extends JpaRepository<Places, Long> {
	
	@Query(value = "SELECT idPlaces, name, image FROM Places")
	Page<Places> findAllPlaces(Pageable page);
	

}
