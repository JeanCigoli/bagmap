package com.maps.bagmap.service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.UserEstablishment;
import com.maps.bagmap.repository.UserEstablishmentRepository;
import com.maps.bagmap.service.exceptions.UserEstablishmentNotFoundException;

@Service
public class UserEstablishmentService {
	
	@Autowired
	UserEstablishmentRepository userEstablishmentRepository;
	
	public List<UserEstablishment> listAll(){
		return userEstablishmentRepository.findAll();
	}
	
	public UserEstablishment listById(Long id){
		
		UserEstablishment user = userEstablishmentRepository.findById(id).orElse(null);
		
		if(user == null) {
			throw new UserEstablishmentNotFoundException("O usuário não foi encontado na nossa base de dados.");
		}
		
		return user;
	}
	
	public UserEstablishment listByEmailAndCode(String email, String code){
		
		UserEstablishment user = userEstablishmentRepository.findByEmailAndCode(email, code);
		
		if(user == null) {
			throw new UserEstablishmentNotFoundException("O usuário não foi encontado na nossa base de dados.");
		}
		
		return user;
	}
	
	public UserEstablishment checksExistence(UserEstablishment user) {
		return listById(user.getIdUser());
	}
	
	public UserEstablishment insert(UserEstablishment user) throws SQLIntegrityConstraintViolationException {

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		user.setPassword(encoder.encode(user.getPassword()));
		user.setIdUser(null);

		return userEstablishmentRepository.save(user);

	}
	
	public UserEstablishment update(UserEstablishment user) {
		
		UserEstablishment userBanco = checksExistence(user); 
		
		int result = userEstablishmentRepository.updateUserEstablishment(user.getNameUserEstablishment(), user.getPositions(), 
				user.getPhoneUserEstablishment(), user.getUsername(), user.getEmail(), user.getIdUser());
		
		if(result == 1) {
			
			BeanUtils.copyProperties(user, userBanco, "id");
			
			return userBanco;
			
		}
		
		return null;
		
	}
	
	public void delete(Long id) {
	
		try {
			
			userEstablishmentRepository.deleteById(id);
			
		} catch (EmptyResultDataAccessException e) {
			
			throw new UserEstablishmentNotFoundException("Usuário não pode ser encontrado em nossa base de dados.");
		}
			
	}

}
