package com.maps.bagmap.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.City;
import com.maps.bagmap.model.State;
import com.maps.bagmap.repository.CityRepository;
import com.maps.bagmap.repository.StateRepository;
import com.maps.bagmap.service.exceptions.StateNotFoundException;

@Service
public class CityService {

	@Autowired
	CityRepository cityRepository;
	
	@Autowired
	StateRepository stateRepository;

	public List<City> listAll() {
		return cityRepository.findAll();
	}
	
	public List<City> listAllByState(Long idState) {
		
		State state = stateRepository.findById(idState).orElse(null);
		
		if(state == null) {
			throw new StateNotFoundException("O estado não pode ser localizado!");
		}
		
		return cityRepository.findByState(state);
	}

}
