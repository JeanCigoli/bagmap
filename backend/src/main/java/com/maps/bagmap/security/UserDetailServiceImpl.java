package com.maps.bagmap.security;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.maps.bagmap.model.Roles;
import com.maps.bagmap.repository.UserRepository;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
	
	@Autowired
	UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		com.maps.bagmap.model.User user = userRepository.findByUsername(username);
		
		Set<Roles> roles = user.getRoles();
		
		List<String> rolesType = new ArrayList<String>();
		
		for ( Roles role : roles ) {
			rolesType.add(role.getTypeRoles());
		}
		
		String[] stringRoles = new String [rolesType.size()];
		
		rolesType.toArray(stringRoles);
		
		UserDetails userDetails = new User(
				username,
				user.getPassword(),
				AuthorityUtils.createAuthorityList(stringRoles)
				);
		
		return userDetails;
	}

	
	
}
