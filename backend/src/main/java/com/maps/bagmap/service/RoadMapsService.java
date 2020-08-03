package com.maps.bagmap.service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.RoadMaps;
import com.maps.bagmap.repository.RoadMapsRepository;
import com.maps.bagmap.service.exceptions.RoadMapsNotFoundException;

@Service
public class RoadMapsService {

	@Autowired
	RoadMapsRepository roadMapsRepository;

	public List<RoadMaps> listAll(Long id) {

		return roadMapsRepository.findAllPlaces(id);

	}

	public RoadMaps listById(Long id) {

		RoadMaps roadmaps = roadMapsRepository.findById(id).orElse(null);

		if (roadmaps == null) {
			throw new RoadMapsNotFoundException("O roteiro não pode ser encontrado em nossa base de dados.");
		}

		return roadmaps;
	}

	public RoadMaps checksExistence(RoadMaps roadmaps) {
		return listById(roadmaps.getIdRoadMaps());
	}

	public RoadMaps insert(RoadMaps roadmaps) throws SQLIntegrityConstraintViolationException {

		return roadMapsRepository.save(roadmaps);

	}

	public void delete(Long id) {

		try {

			roadMapsRepository.deleteById(id);

		} catch (EmptyResultDataAccessException e) {

			throw new RoadMapsNotFoundException("O roteiro não pode ser encontrado em nossa base de dados.");
		}

	}

}
