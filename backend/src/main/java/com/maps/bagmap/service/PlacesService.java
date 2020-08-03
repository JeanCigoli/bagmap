package com.maps.bagmap.service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.Places;
import com.maps.bagmap.repository.PlacesRepository;
import com.maps.bagmap.service.exceptions.PlacesNotFoundException;

@Service
public class PlacesService {

	@Autowired
	PlacesRepository placeRepository;

	public Page<Places> listAll(Pageable page) {

		return placeRepository.findAll(page);

	}

	public Places listById(Long id) {

		Places place = placeRepository.findById(id).orElse(null);

		if (place == null) {
			throw new PlacesNotFoundException("O lugar não pode ser encontrado em nossa base de dados.");
		}

		return place;
	}

	public Places checksExistence(Places place) {
		return listById(place.getIdPlaces());
	}

	public Places insert(Places place) throws SQLIntegrityConstraintViolationException {

		return placeRepository.save(place);

	}

	public void delete(Long id) {

		try {

			placeRepository.deleteById(id);

		} catch (EmptyResultDataAccessException e) {

			throw new PlacesNotFoundException("O lugar não pode ser encontrado em nossa base de dados.");
		}

	}

}
