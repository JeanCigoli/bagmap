package com.maps.bagmap.service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.UserBranch;
import com.maps.bagmap.repository.UserBranchRepository;
import com.maps.bagmap.service.exceptions.UserBranchNotFoundException;

@Service
public class UserBranchService {
	
	@Autowired
	UserBranchRepository userBranchRepository;
	
	public List<UserBranch> listAll(){
		return userBranchRepository.findAll();
	}
	
	public UserBranch listById(Long id){
		
		UserBranch user = userBranchRepository.findById(id).orElse(null);
		
		if(user == null) {
			throw new UserBranchNotFoundException("O usuário não foi encontado na nossa base de dados.");
		}
		
		return user;
	}
	
	public UserBranch checksExistence(UserBranch user) {
		return listById(user.getIdUser());
	}
	
	public UserBranch insert(UserBranch user) throws SQLIntegrityConstraintViolationException {

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		user.setPassword(encoder.encode(user.getPassword()));
		user.setIdUser(null);

		return userBranchRepository.save(user);

	}
	
	public UserBranch update(UserBranch user) {
		
		UserBranch userBanco = checksExistence(user); 
		
		int result = userBranchRepository.updateUserBranch(user.getNameUserBranch(), user.getPositions(),
				user.getUsername(), user.getEmail(), user.getIdUser());
		
		if(result == 1) {
			
			BeanUtils.copyProperties(user, userBanco, "id");
			
			return userBanco;
			
		}
		
		return null;
		
	}
	
	public void delete(Long id) {
	
		try {
			
			userBranchRepository.deleteById(id);
			
		} catch (EmptyResultDataAccessException e) {
			
			throw new UserBranchNotFoundException("Usuário não pode ser encontrado em nossa base de dados.");
		}
			
	}

}
