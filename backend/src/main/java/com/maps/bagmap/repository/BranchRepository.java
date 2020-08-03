package com.maps.bagmap.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.maps.bagmap.model.Branch;
import com.maps.bagmap.model.RoadMaps;

public interface BranchRepository extends JpaRepository<Branch, Long> {

	@Query("SELECT b FROM Branch b WHERE b.typePlace.nameEn = :type")
	List<Branch> findByType(@Param("type") String type);
	
	@Query(value = "SELECT b FROM Branch b WHERE b.establishment.idEstablishment = :id")
	List<Branch> findBranchByEstablishment(@Param ("id") Long id);

	@Query(value = "SELECT * FROM ( " + 
			" SELECT * FROM tb_branch l WHERE " + 
			" l.latitude BETWEEN :latitude - (:radius / 69) " + 
			"   AND :latitude + (:radius / 69) " + 
			"   AND l.longitude BETWEEN :longitude - (:radius / (69 * COS(RADIANS(latitude))))" + 
			"   AND :longitude + (:radius / (69* COS(RADIANS(latitude)))) " + 
			") r " + 
			"WHERE (3956 * ACOS(COS(RADIANS(:latitude)) * COS(RADIANS(r.latitude)) * COS(RADIANS(:longitude) - RADIANS(r.longitude)) + SIN(RADIANS(:latitude)) * SIN(RADIANS(r.latitude)))) < :radius", nativeQuery = true)
	List<Branch> findByDistanceAndType(@Param("latitude") Double latitude, @Param("longitude") Double longitude, @Param("radius") String radius);

}
