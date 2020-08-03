package com.maps.bagmap.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.maps.bagmap.model.RoadMaps;

public interface RoadMapsRepository extends JpaRepository<RoadMaps, Long> {
	
	@Query(value = "SELECT r FROM RoadMaps r WHERE r.person.idUser = :id")
	List<RoadMaps> findAllPlaces(@Param ("id") Long id);

}
