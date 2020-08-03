package com.maps.bagmap.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tb_user")
@Inheritance(strategy = InheritanceType.JOINED)
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_user")
	private Long idUser;

	@NotNull
	@Column(name = "email", unique = true)
	@Size(min = 3, max = 100, message = "Por favor digite um e-mail com o minímo de 3 e o máximo de 100 letras.")
	private String email;
	
	@NotNull
	@Column(name = "image")
	@Size(min = 3, max = 200, message = "Por favor digite um e-mail com o minímo de 3 e o máximo de 100 letras.")
	private String image;

	@NotNull
	@Column(name = "username", unique = true)
	@Size(min = 3, max = 100, message = "Por favor digite um username com o minímo de 3 e o máximo de 100 letras.")
	private String username;
	
	@Column(name = "uid", unique = true)
	private String uid;

	@Column(name = "password")
	private String password;
	
	@NotNull
	@Column(name = "authorization")
	private boolean authorization;

	@Column(name = "created_at", updatable = false)
	@CreationTimestamp
	private Timestamp createdAt;

	@Column(name = "updated_at")
	@UpdateTimestamp
	@JsonIgnore
	private Timestamp updatedAt;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "tb_roles_user", 
		joinColumns = @JoinColumn(name = "id_user", referencedColumnName = "id_user"), 
			inverseJoinColumns = @JoinColumn(name = "id_roles", referencedColumnName = "id_roles"))
	private Set<Roles> roles;

	public User() {
	}

	public Long getIdUser() {
		return idUser;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public boolean isAuthorization() {
		return authorization;
	}

	public void setAuthorization(boolean authorization) {
		this.authorization = authorization;
	}

	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public Set<Roles> getRoles() {
		return roles;
	}

	public void setRoles(Set<Roles> roles) {
		this.roles = roles;
	}

}
