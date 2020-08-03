package com.maps.bagmap.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maps.bagmap.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

		
}
