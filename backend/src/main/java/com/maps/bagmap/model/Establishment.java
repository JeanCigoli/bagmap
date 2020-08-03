package com.maps.bagmap.model;

import java.sql.Timestamp;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Null;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_establishment")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Establishment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_establishment")
	private Long idEstablishment;

	@Column(name = "name_establishment")
	private String nameEstablishment;

	@Column(name = "instagram")
	@Null
	private String instagram;
	
	@Column(name = "facebook")
	@Null
	private String facebook;

	@OneToOne
	@JoinColumn(name = "id_user_establishment")
	@JsonIgnoreProperties(ignoreUnknown = true, value = { "nameUserEstablishment", "phoneUserEstablishment", "code", "facebook", "uid",
			"password", "authorization", "roles"})
	private UserEstablishment userEstablishment;

	@Column(name = "created_at", updatable = false)
	@CreationTimestamp
	private Timestamp createdAt;

	@Column(name = "updated_at")
	@UpdateTimestamp
	private Timestamp updatedAt;

	public Establishment() {
	}

	public Long getIdEstablishment() {
		return idEstablishment;
	}

	public void setIdEstablishment(Long idEstablishment) {
		this.idEstablishment = idEstablishment;
	}

	public String getNameEstablishment() {
		return nameEstablishment;
	}

	public void setNameEstablishment(String nameEstablishment) {
		this.nameEstablishment = nameEstablishment;
	}

	public UserEstablishment getUserEstablishment() {
		return userEstablishment;
	}

	public void setUserEstablishment(UserEstablishment userEstablishment) {
		this.userEstablishment = userEstablishment;
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
