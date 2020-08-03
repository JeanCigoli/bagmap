package com.maps.bagmap.resource;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maps.bagmap.model.Address;
import com.maps.bagmap.service.AddressService;
import com.maps.bagmap.service.ResponseService;

@RestController
@CrossOrigin
@RequestMapping("/address")
public class AddressResource {

	@Autowired
	AddressService addressService;
	
	@PutMapping("/{id}")
	public ResponseEntity<Map<Object,Object>> updateAddress(@PathVariable("id") Long id, @RequestBody Address address ) {
		
		address.setIdAddress(id);
		try {
			
			addressService.update(address);
			
		} catch (Exception e) {
			return ResponseService.apiResponse(HttpStatus.BAD_REQUEST, false, 
					"Erro ao atualizar endereço", new String[] {}, 
					new String[] {"Objeto Json mal informado", "Verifque os parâmetros informados"});
			
		}
		
		return ResponseService.apiResponse(HttpStatus.OK, true, 
				"Endereço atualizado com sucesso", address, 
				new String[] {});
		
	}
	
}
