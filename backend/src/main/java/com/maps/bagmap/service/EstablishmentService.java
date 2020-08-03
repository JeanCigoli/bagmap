package com.maps.bagmap.service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.Establishment;
import com.maps.bagmap.repository.EstablishmentRepository;
import com.maps.bagmap.service.exceptions.EstablishmentNotFoundException;

@Service
public class EstablishmentService {

	@Autowired
	EstablishmentRepository establishmentRepository;

	public Establishment checksExistence(Establishment establishment) {
		return listById(establishment.getIdEstablishment());
	}

	public Establishment listById(Long id) {

		Establishment establishment = establishmentRepository.findById(id).orElse(null);

		if (establishment == null) {
			throw new EstablishmentNotFoundException("O Estabelecimento não foi encontado na nossa base de dados.");
		}

		return establishment;
	}

	public Establishment listByUser(Long id) {

		Establishment establishment = establishmentRepository.findByUserEstablishment(id);

		if (establishment == null) {
			throw new EstablishmentNotFoundException("O Estabelecimento não foi encontado na nossa base de dados.");
		}

		return establishment;

	}

	public List<Establishment> listAll() {
		return establishmentRepository.findAll();
	}

	public Establishment insert(Establishment establishment) throws SQLIntegrityConstraintViolationException {

		establishment.setIdEstablishment(null);

		return establishmentRepository.save(establishment);

	}

	public void delete(Long id) {

		try {

			establishmentRepository.deleteById(id);

		} catch (EmptyResultDataAccessException e) {

			throw new EstablishmentNotFoundException("O Estabelecimento não foi encontado na nossa base de dados.");
		}

	}

}
