package com.maps.bagmap.model;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_places")
public class Places {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_places")
	private Long idPlaces;

	@NotNull
	@Column(name = "name")
	@Size(min = 3, max = 200, message = "Por favor digite um nome com o minímo de 3 e o máximo de 200 letras.")
	private String name;

	@NotNull
	@Column(name = "image")
	private String image;

	@NotNull
	@Column(name = "latitude")
	private Double latitude;

	@NotNull
	@Column(name = "longitude")
	private Double longitude;

	@OneToOne
	@JoinColumn(name = "id_type_place")
	private TypePlace typePlace;

	@Column(name = "description")
	private String description;

	@ManyToOne
	@JoinColumn(name = "id_user")
	@JsonIgnoreProperties(ignoreUnknown = true, value = { "email", "uid", "password", "authorization", "roles",
			"namePerson", "dateBirth", "gender", "phonePerson", "address", "createdAt" })
	private Person person;

	@Column(name = "created_at", updatable = false)
	@CreationTimestamp
	private Timestamp createdAt;

	@Column(name = "updated_at")
	@UpdateTimestamp
	private Timestamp updatedAt;


	public Long getIdPlaces() {
		return idPlaces;
	}

	public void setIdPlaces(Long idPlaces) {
		this.idPlaces = idPlaces;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public TypePlace getTypePlace() {
		return typePlace;
	}

	public void setTypePlace(TypePlace typePlace) {
		this.typePlace = typePlace;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	public Timestamp getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Timestamp createdAt) {
		this.createdAt = createdAt;
	}

	public Timestamp getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Timestamp updatedAt) {
		this.updatedAt = updatedAt;
	}

}
