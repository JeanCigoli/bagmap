package com.maps.bagmap.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.maps.bagmap.model.PlaceRoad;

public interface PlaceRoadRepository extends JpaRepository<PlaceRoad, Long> {
	
	@Query(value = "SELECT r FROM PlaceRoad r WHERE r.roadMap.idRoadMaps = :idRoad ")
	List<PlaceRoad> findByRoadMap(@Param("idRoad") Long idRoad);

}
