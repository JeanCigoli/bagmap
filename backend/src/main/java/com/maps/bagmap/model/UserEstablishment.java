package com.maps.bagmap.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "tb_user_establishment")
@PrimaryKeyJoinColumn(name = "id_user", referencedColumnName = "id_user")
public class UserEstablishment extends User {

	private static final long serialVersionUID = 1L;

	@Column(name = "name_user_establishment")
	private String nameUserEstablishment;

	@Column(name = "phone_user_establishment")
	private String phoneUserEstablishment;

	@Column(name = "positions")
	private String positions;

	@Column(name = "code")
	private String code;

	public UserEstablishment() {
	}

	public String getNameUserEstablishment() {
		return nameUserEstablishment;
	}

	public void setNameUserEstablishment(String nameUserEstablishment) {
		this.nameUserEstablishment = nameUserEstablishment;
	}

	public String getPhoneUserEstablishment() {
		return phoneUserEstablishment;
	}

	public void setPhoneUserEstablishment(String phoneUserEstablishment) {
		this.phoneUserEstablishment = phoneUserEstablishment;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getPositions() {
		return positions;
	}

	public void setPositions(String positions) {
		this.positions = positions;
	}

}
