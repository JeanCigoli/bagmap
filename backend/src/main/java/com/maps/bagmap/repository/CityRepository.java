package com.maps.bagmap.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maps.bagmap.model.City;
import com.maps.bagmap.model.State;

public interface CityRepository extends JpaRepository<City, Long> {

	List<City> findByState(State state);

}
