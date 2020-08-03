package com.maps.bagmap.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "tb_roles")
public class Roles implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_roles")
	private Long idRoles;
	
	@Column(name = "type_roles")
	private String typeRoles;
	
	@Column(name = "created_at", updatable = false)
	@CreationTimestamp
	private Timestamp createdAt;

	@Column(name = "updated_at")
	@UpdateTimestamp
	private Timestamp updatedAt;
	
	@ManyToMany(mappedBy = "roles")
	private Set<User> user;

	public Roles() {
	}

	public Long getIdRoles() {
		return idRoles;
	}

	public void setIdRoles(Long idRoles) {
		this.idRoles = idRoles;
	}

	public String getTypeRoles() {
		return typeRoles;
	}

	public void setTypeRoles(String typeRoles) {
		this.typeRoles = typeRoles;
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

/*
 * 
 * @ManyToOne(fetch = FetchType.EAGER)
	@JoinTable(name = "tb_user_roles",
		joinColumns = {
				@JoinColumn(name = "id_roles", referencedColumnName = "id_roles",
						nullable = false, updatable = false)
		},
		inverseJoinColumns = {
				@JoinColumn(name = "id_user", referencedColumnName = "id_user",
						nullable = false, updatable = false)
		})
	private User user;*/
