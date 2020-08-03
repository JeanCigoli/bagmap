package com.maps.bagmap.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.maps.bagmap.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	@Query(value = "SELECT u FROM User u WHERE u.username = :username OR u.email = :username")
	User findByUsername(@Param("username") String username);
	
	User findByEmail(@Param("email" ) String email);
	
	@Query(value = "SELECT u FROM User u WHERE u.uid = :uid AND u.email = :email")
	User findByUidAndEmail(@Param("uid") String uid, @Param("email") String email);
	
	@Transactional
	@Modifying
	@Query(value="update User u set u.authorization = 1 where u.idUser = :idUser and u.email = :email")
	int updateUserAuthorization(@Param ("email") String email, @Param("idUser") Long id_user);
	
	@Transactional
	@Modifying
	@Query(value = "update User u set u.image = :image where u.idUser = :idUser ")
	int updateImage(@Param("image") String image, @Param("idUser") Long id_user);
	
/*	
 	@Transactional
	@Modifying
	@Query(value = "update User u set u.username = :username, u.email = :email where u.idUser = idUser ")
	User updateUser(@Param("username") String username, @Param("email") String email, @Param("idUser") Long idUser);
*/
	
}
