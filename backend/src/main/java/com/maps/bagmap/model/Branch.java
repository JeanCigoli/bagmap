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
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_branch")
public class Branch {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_branch", updatable = false, nullable = false)
	private Long idBranch;

	@Column(name = "phone_branch")
	private String phoneBranch;

	@Column(name = "name_branch")
	private String nameBranch;

	@NotNull
	@Column(name = "image")
	private String image;

	@OneToOne
	@JoinColumn(name = "id_type_place")
	private TypePlace typePlace;

	@Column(name = "cnpj")
	private String cnpj;

	@Column(name = "latitude")
	private Double latitude;

	@Column(name = "longitude")
	private Double longitude;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "branch")
	@JsonIgnoreProperties(ignoreUnknown = true, value = { "createdAt" })
	private List<Image> images;

	@ManyToOne
	@JoinColumn(name = "id_establishment")
	@JsonIgnoreProperties(ignoreUnknown = true, value = { "createdAt", "nameEstablishment", "updatedAt" })
	private Establishment establishment;

	@Column(name = "created_at", updatable = false)
	@CreationTimestamp
	private Timestamp createdAt;

	@Column(name = "updated_at")
	@UpdateTimestamp
	private Timestamp updatedAt;
	
	@PrePersist
	public void prePersist() {

		images.forEach(image -> image.setBranch(this));

	}

	public Branch() {
	}

	public Long getIdBranch() {
		return idBranch;
	}

	public void setIdBranch(Long idBranch) {
		this.idBranch = idBranch;
	}

	public TypePlace getTypePlace() {
		return typePlace;
	}

	public void setTypePlace(TypePlace typePlace) {
		this.typePlace = typePlace;
	}

	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}

	public String getPhoneBranch() {
		return phoneBranch;
	}

	public void setPhoneBranch(String phoneBranch) {
		this.phoneBranch = phoneBranch;
	}

	public String getNameBranch() {
		return nameBranch;
	}

	public void setNameBranch(String nameBranch) {
		this.nameBranch = nameBranch;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
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

	public Establishment getEstablishment() {
		return establishment;
	}

	public void setEstablishment(Establishment establishment) {
		this.establishment = establishment;
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
