package com.maps.bagmap.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.maps.bagmap.model.UserEstablishment;

public interface UserEstablishmentRepository extends JpaRepository<UserEstablishment, Long> {
	
	@Transactional
	@Modifying
	@Query(value="update UserEstablishment p set p.nameUserEstablishment = :nameUserEstablishment, p.positions = :positions, " + 
	"p.phoneUserEstablishment = :phoneUserEstablishment, p.username = :username, p.email = :email  where p.idUser = :idUser")
	int updateUserEstablishment(@Param("nameUserEstablishment") String nameUserEstablishment, @Param("positions") String positions,
			@Param("phoneUserEstablishment") String phoneUserEstablishment ,@Param("username") String username, 
			@Param ("email") String email, @Param("idUser") Long id_user);
	
	UserEstablishment findByEmailAndCode(@Param("email") String email, @Param("code") String code);

}
