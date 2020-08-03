package com.maps.bagmap.service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.Person;
import com.maps.bagmap.repository.PersonRepository;
import com.maps.bagmap.service.exceptions.UserNotFoundException;

@Service
public class PersonService {
	
	@Autowired
	PersonRepository personRepository;
	
	public List<Person> listAll(){
		return personRepository.findAll();
	}
	
	public Person listById(Long id){
		
		Person person = personRepository.findById(id).orElse(null);
		
		if(person == null) {
			throw new UserNotFoundException("O usuário não foi encontado na nossa base de dados.");
		}
		
		return person;
	}
	
	public Person checksExistence(Person person) {
		return listById(person.getIdUser());
	}
	
	public Person insert(Person person) throws SQLIntegrityConstraintViolationException {

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		person.setPassword(encoder.encode(person.getPassword()));
		person.setIdUser(null);

		return personRepository.save(person);

	}
	
	public Person update(Person person) {
		
		Person personBanco = checksExistence(person); 
		
		int result = personRepository.updatePerson(person.getNamePerson(), person.getDateBirth(), person.getGender(), 
				person.getPhonePerson(), person.getUsername(), person.getEmail(), person.getIdUser());
		
		if(result == 1) {
			
			BeanUtils.copyProperties(person, personBanco, "id");
			
			return personBanco;
			
		}
		
		return null;
		
	}
	
	public void delete(Long id) {
	
		try {
			
			personRepository.deleteById(id);
			
		} catch (EmptyResultDataAccessException e) {
			
			throw new UserNotFoundException("Usuário não pode ser encontrado em nossa base de dados.");
		}
			
	}

}
