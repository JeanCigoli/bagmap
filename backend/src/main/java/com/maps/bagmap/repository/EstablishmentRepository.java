package com.maps.bagmap.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.maps.bagmap.model.Establishment;

public interface EstablishmentRepository extends JpaRepository<Establishment, Long> {
	
	@Query("SELECT e FROM Establishment e WHERE e.userEstablishment.idUser = :idUser")
	Establishment findByUserEstablishment(@Param("idUser") Long idUser);

}
