package com.maps.bagmap.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.User;
import com.maps.bagmap.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	
	public List<User> listAll(){
		
		return userRepository.findAll();
		
	}
	
	public User listById(Long id) {
		
		User user = userRepository.findById(id).orElse(null);
		
		if(user == null) {
			throw new UsernameNotFoundException("O usuário não pode ser localizado!");
		}
		
		return user;
	}
	
	public User listByUsername(String username) {
		
		User user = userRepository.findByUsername(username);
		
		if(user == null) {
			throw new UsernameNotFoundException("O usuário não pode ser encontrado!");
		}
		
		return user;
		
	}
	
	public User listByEmail(String email) {
		
		User user = userRepository.findByEmail(email);
		
		if(user == null) {
			throw new UsernameNotFoundException("O usuário não pode ser encontrado!");
		}
		
		return user;
		
	}
	
	public boolean updateAuthorization(Long id, String email) {
		
		int result = userRepository.updateUserAuthorization(email, id);
		
		if(result == 1) {
			
			return true;
			
		}
		
		return false;
		
	}
	
	public User listByUidAndEmail(String uid, String email) {
		
		User user = userRepository.findByUidAndEmail(uid, email);
		
		if(user == null) {
			throw new UsernameNotFoundException("O usuário não pode ser encontrado!");
		}
		
		return user;
		
	}
	
	public boolean updateImage(String image, Long idUser) {
		
		int result = userRepository.updateImage(image, idUser);
		
		if(result == 1) {
			return true;
		}
		
		return false;
		
	}
	
}
