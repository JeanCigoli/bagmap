package com.maps.bagmap.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.TypePlace;
import com.maps.bagmap.repository.TypeBranchRepository;

@Service
public class TypePlaceService {
	
	@Autowired
	TypeBranchRepository typePlaceRepository;
	
	public List<TypePlace> listAll(){
		return typePlaceRepository.findAll();
	}

}
