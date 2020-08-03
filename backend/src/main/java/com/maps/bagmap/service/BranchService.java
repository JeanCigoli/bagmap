package com.maps.bagmap.service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.Branch;
import com.maps.bagmap.repository.BranchRepository;
import com.maps.bagmap.service.exceptions.BranchNotFoundException;

@Service
public class BranchService {

	@Autowired
	BranchRepository branchRepository;

	public Page<Branch> listAll(Pageable pageable) {

		return branchRepository.findAll(pageable);

	}

	public Branch listById(Long id) {

		Branch branch = branchRepository.findById(id).orElse(null);

		if (branch == null) {
			throw new BranchNotFoundException("O lugar não pode ser encontrado em nossa base de dados.");
		}

		return branch;
	}
	
	public List<Branch> listByTypeBranch(String type) {

		List<Branch> branch = branchRepository.findByType(type);

		if (branch == null) {
			throw new BranchNotFoundException("O lugar não pode ser encontrado em nossa base de dados.");
		}

		return branch;
	}
	
	public List<Branch> listByEstablishment(Long id) {

		List<Branch> branch = branchRepository.findBranchByEstablishment(id);

		if (branch == null) {
			throw new BranchNotFoundException("O lugar não pode ser encontrado em nossa base de dados.");
		}

		return branch;
	}
	
	public List<Branch> listByTypeLatitude(Double latitude, Double longitude, String radius) {

		List<Branch> branch = branchRepository.findByDistanceAndType(latitude,longitude, radius);

		if (branch == null) {
			throw new BranchNotFoundException("O lugar não pode ser encontrado em nossa base de dados.");
		}

		return branch;
	}

	public Branch checksExistence(Branch branch) {
		return listById(branch.getIdBranch());
	}

	public Branch insert(Branch branch) throws SQLIntegrityConstraintViolationException {

		return branchRepository.save(branch);

	}

	public void delete(Long id) {

		try {

			branchRepository.deleteById(id);

		} catch (EmptyResultDataAccessException e) {

			throw new BranchNotFoundException("O lugar não pode ser encontrado em nossa base de dados.");
		}

	}

}
