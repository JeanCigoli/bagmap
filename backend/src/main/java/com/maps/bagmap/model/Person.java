package com.maps.bagmap.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "tb_person")
@PrimaryKeyJoinColumn(name = "id_user", referencedColumnName = "id_user")
public class Person extends User {

	private static final long serialVersionUID = 1L;

	@Column(name = "name_person")
	private String namePerson;

	@Column(name = "date_birth")
	private Date dateBirth;

	@Column(name = "gender")
	private String gender;

	@Column(name = "phone_person")
	private String phonePerson;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_address")
	private Address address;

	public Person() {
	}

	public String getNamePerson() {
		return namePerson;
	}

	public void setNamePerson(String namePerson) {
		this.namePerson = namePerson;
	}

	public Date getDateBirth() {
		return dateBirth;
	}

	public void setDateBirth(Date dateBirth) {
		this.dateBirth = dateBirth;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhonePerson() {
		return phonePerson;
	}

	public void setPhonePerson(String phonePerson) {
		this.phonePerson = phonePerson;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
	
	@Override
	public String toString() {
		return "Person [idUser=" + getIdUser() + ", email=" + getEmail() + ", authorization=" + isAuthorization() + "]";
	}


}
