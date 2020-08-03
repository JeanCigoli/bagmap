package com.maps.bagmap.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.State;
import com.maps.bagmap.repository.StateRepository;

@Service
public class StateService {
	
	@Autowired
	StateRepository stateRepository;
	
	public List<State> listAll(){
		return stateRepository.findAll();
	}

}
