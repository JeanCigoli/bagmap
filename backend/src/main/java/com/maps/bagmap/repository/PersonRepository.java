package com.maps.bagmap.repository;

import java.util.Date;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.maps.bagmap.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {
	
	@Transactional
	@Modifying
	@Query(value="update Person p set p.namePerson = :namePerson, p.dateBirth = :dateBirth, "
			+ "p.gender = :gender, p.phonePerson = :phonePerson, p.username = :username, p.email = :email  where p.idUser = :idUser")
	int updatePerson(@Param("namePerson") String namePerson,@Param("dateBirth") Date date_birth, 
			@Param("gender") String gender, @Param("phonePerson") String phone_person, @Param("username") String username, 
			@Param ("email") String email, @Param("idUser") Long id_user);
	
	

}
