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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_posts")
public class Posts {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_posts")
	private Long idPosts;

	@Column(name = "location")
	private String location;

	@ManyToOne
	@JoinColumn(name = "id_user")
	@JsonIgnoreProperties(ignoreUnknown = true, value = { "email", "uid", "password", "authorization", "roles",
			"dateBirth", "gender", "phonePerson", "address", "createdAt" })
	private Person person;

	@Column(name = "description")
	private String description;

	@Column(name = "created_at", updatable = false)
	@CreationTimestamp
	private Timestamp createdAt;

	@Column(name = "updated_at")
	@UpdateTimestamp
	private Timestamp updatedAt;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "posts")
	private List<ImagesPosts> images;

	@PrePersist
	public void prePersist() {

		images.forEach(image -> image.setPosts(this));

	}

	public Long getIdPosts() {
		return idPosts;
	}

	public void setIdPosts(Long idPosts) {
		this.idPosts = idPosts;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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

	public List<ImagesPosts> getImages() {
		return images;
	}

	public void setImages(List<ImagesPosts> images) {
		this.images = images;
	}

}
