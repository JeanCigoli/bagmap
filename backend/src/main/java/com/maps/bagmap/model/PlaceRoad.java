package com.maps.bagmap.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_placeroad")
public class PlaceRoad {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_placeroad")
	private Long idPlaceRoad;

	@NotNull
	@Column(name = "id_place")
	private String idPlace;

	@NotNull
	@Column(name = "type_id_place")
	private String typeIdPlace;

	@NotNull
	@Column(name = "day")
	private int day;

	@Column(name = "description")
	private String description;

	@ManyToOne
	@JoinColumn(name = "id_roadmaps")
	@JsonIgnoreProperties(ignoreUnknown = true, value = { "banner", "name", "description", "days", "person",
			"latitude", "longitude", "createdAt", "updatedAt",  })
	private RoadMaps roadMap;

	public Long getIdPlaceRoad() {
		return idPlaceRoad;
	}

	public void setIdPlaceRoad(Long idPlaceRoad) {
		this.idPlaceRoad = idPlaceRoad;
	}

	public String getIdPlace() {
		return idPlace;
	}

	public void setIdPlace(String idPlace) {
		this.idPlace = idPlace;
	}

	public String getTypeIdPlace() {
		return typeIdPlace;
	}

	public void setTypeIdPlace(String typeIdPlace) {
		this.typeIdPlace = typeIdPlace;
	}

	public int getDay() {
		return day;
	}

	public void setDay(int day) {
		this.day = day;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public RoadMaps getRoadMap() {
		return roadMap;
	}

	public void setRoadMap(RoadMaps roadMap) {
		this.roadMap = roadMap;
	}

}
