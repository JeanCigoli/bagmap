package com.maps.bagmap.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "tb_user_branch")
@PrimaryKeyJoinColumn(name = "id_user", referencedColumnName = "id_user")
public class UserBranch extends User {

	private static final long serialVersionUID = 1L;

	@Column(name = "name_user_branch")
	private String nameUserBranch;

	@Column(name = "positions")
	private String positions;

	@OneToOne
	@JoinColumn(name = "id_branch")
	private Branch branch;

	public String getNameUserBranch() {
		return nameUserBranch;
	}

	public void setNameUserBranch(String nameUserBranch) {
		this.nameUserBranch = nameUserBranch;
	}

	public String getPositions() {
		return positions;
	}

	public void setPositions(String positions) {
		this.positions = positions;
	}

	public Branch getBranch() {
		return branch;
	}

	public void setBranch(Branch branch) {
		this.branch = branch;
	}

}
