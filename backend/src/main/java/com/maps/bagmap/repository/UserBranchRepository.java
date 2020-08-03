package com.maps.bagmap.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.maps.bagmap.model.UserBranch;

public interface UserBranchRepository extends JpaRepository<UserBranch, Long> {
	
	@Transactional
	@Modifying
	@Query(value="update UserBranch p set p.nameUserBranch = :nameUserBranch, p.positions = :positions, " + 
	"p.username = :username, p.email = :email  where p.idUser = :idUser")
	int updateUserBranch(@Param("nameUserBranch") String nameUserBranch, @Param("positions") String positions,
			@Param("username") String username, @Param ("email") String email, @Param("idUser") Long id_user);

}
