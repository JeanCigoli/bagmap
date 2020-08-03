package com.maps.bagmap.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.Address;
import com.maps.bagmap.repository.AddressRepository;
import com.maps.bagmap.service.exceptions.AddressNotFoundException;

@Service
public class AddressService {
	
	@Autowired
	AddressRepository addressRepository;
	
	public Address listById(Long id) {
		Address address = addressRepository.findById(id).orElse(null);
		
		if(address == null) {
			throw new AddressNotFoundException("O endereço não pode ser encontrado em nossa base de dados.");
		}
		return address;
	}
	
	public Address checksExistence( Address address) {
		
		return listById(address.getIdAddress());
	}
	
	public Address update(Address address) {
		
		checksExistence(address);
		
		return addressRepository.save(address);
	}
	
	

}
