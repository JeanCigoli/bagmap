package com.maps.bagmap.security;

import java.util.Base64;
import java.util.Date;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.maps.bagmap.model.Roles;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtAuthenticationService {
	

	private static final String WORD_KEY = Base64.getEncoder().encodeToString("MapsTcc".getBytes());

	private static final String SECRET_KEY = Base64.getEncoder().encodeToString(WORD_KEY.getBytes());


	private static final String PREFIX = "Bearer";

	private static final String EMPTY = "";

	private static final String AUTHORIZATION = "Authorization";

	private static final long EXPIRATION_TIME = 604800000;

	
	 @Autowired 
	 private UserDetailServiceImpl userDetailService;
	 

	public String createToken(String username, Set<Roles> roles) {

		Claims claims = Jwts.claims().setSubject(username);
		claims.put("roles", roles);

		Date now = new Date();
		Date validity = new Date(now.getTime() + EXPIRATION_TIME);

		String token = Jwts.builder().setClaims(claims).setIssuedAt(now).setExpiration(validity)
				.signWith(SignatureAlgorithm.HS512, SECRET_KEY).compact();

		return token;
	}

	public Authentication getAuthentication(HttpServletRequest req) {

		String token = resolveToken(req);

		if (token != null && validateToken(token)) {
			
			String username = Jwts.parser()
					.setSigningKey(SECRET_KEY)
					.parseClaimsJws(token)
					.getBody()
					.getSubject();
			
			if(username != null) {
				
				UserDetails userDetails = userDetailService.loadUserByUsername(username);
				
				return new UsernamePasswordAuthenticationToken(
						userDetails,
						null,
						userDetails.getAuthorities()
						);
				
			}

		}
		
		return null;

	}
	

	public boolean validateToken(String token) {

		Jws<Claims> claim = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);

		if (claim.getBody().getExpiration().before(new Date())) {
			return false;
		}

		return true;
	}
	

	public String resolveToken(HttpServletRequest req) {

		String bearerToken = req.getHeader(AUTHORIZATION);

		if (bearerToken != null && bearerToken.startsWith(PREFIX)) {

			return bearerToken.replace(PREFIX, EMPTY).trim();

		}

		return null;
	}

}
