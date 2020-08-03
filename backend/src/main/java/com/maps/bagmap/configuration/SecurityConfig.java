package com.maps.bagmap.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.maps.bagmap.security.JwtAuthenticationConfigurer;
import com.maps.bagmap.security.JwtAuthenticationService;
import com.maps.bagmap.security.UserDetailServiceImpl;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtAuthenticationService jwtAuthenticationService;
	
	@Autowired
	private UserDetailServiceImpl userDetailService;
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http
			.httpBasic().disable()
			.csrf().disable()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
				.authorizeRequests()
				.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
				.antMatchers(HttpMethod.POST, "/auth/**").permitAll()
				.antMatchers(HttpMethod.GET, "/states/**").permitAll()
				.antMatchers(HttpMethod.GET, "/places/**").permitAll()
				.antMatchers(HttpMethod.GET, "/user/email/**").permitAll()
				.antMatchers(HttpMethod.POST, "/person/register").permitAll()
				.antMatchers(HttpMethod.POST, "/user/establishment/register").permitAll()
				.antMatchers(HttpMethod.PUT, "/user/establishment/authorization").permitAll()
				.antMatchers(HttpMethod.POST, "/user/branch/register").permitAll()
				.antMatchers(HttpMethod.PUT, "/person/authorization").permitAll()
				.antMatchers(HttpMethod.PUT, "/user/authorization").permitAll()
				.antMatchers(HttpMethod.GET, "/maps/**").permitAll()
				.antMatchers(HttpMethod.GET, "/branch/**").permitAll()
				.antMatchers(HttpMethod.POST, "/maps/direction").permitAll()
				.antMatchers(HttpMethod.GET, "/type/place").permitAll()
				.antMatchers(HttpMethod.GET, "/posts/**").permitAll()
				.antMatchers(HttpMethod.POST, "/posts/**").hasAnyRole("USER", "ADMIN")
				.antMatchers(HttpMethod.POST, "/places/**").hasAnyRole("USER", "ADMIN")
				.antMatchers(HttpMethod.DELETE, "/places/**").hasAnyRole("USER", "ADMIN")
				.antMatchers(HttpMethod.GET, "/roadmaps/**").hasAnyRole("USER", "ADMIN")
				.antMatchers(HttpMethod.POST, "/roadmaps/**").hasAnyRole("USER", "ADMIN")
				.antMatchers(HttpMethod.DELETE, "/roadmaps/**").hasAnyRole("USER", "ADMIN")
				.antMatchers(HttpMethod.DELETE, "/person/**").hasAnyRole("USER", "ESTABLISHMENT", "ADMIN")
				.antMatchers(HttpMethod.GET, "/person/**").hasAnyRole("USER", "ESTABLISHMENT", "ADMIN")
				.antMatchers(HttpMethod.PUT, "/person/**").hasAnyRole("USER", "ADMIN")
				.antMatchers(HttpMethod.GET, "/establishment/**").hasAnyRole("ESTABLISHMENT", "ADMIN")
				.antMatchers(HttpMethod.POST, "/establishment/**").hasAnyRole("ESTABLISHMENT", "ADMIN")
				.antMatchers(HttpMethod.DELETE, "/user/establishment/**").hasAnyRole("ESTABLISHMENT", "ADMIN")
				.antMatchers(HttpMethod.GET, "/user/establishment/").hasAnyRole("USER", "ESTABLISHMENT", "ADMIN")
				.antMatchers(HttpMethod.DELETE, "/user/branch/**").hasAnyRole("BRANCH", "ESTABLISHMENT", "ADMIN")
				.antMatchers(HttpMethod.GET, "/user/branch/").hasAnyRole("USER","BRANCH", "ESTABLISHMENT", "ADMIN")
				.anyRequest().authenticated()
			.and()
				.apply(new JwtAuthenticationConfigurer(jwtAuthenticationService));
			
		
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		auth.userDetailsService(userDetailService).passwordEncoder(encoder);
		
	}
	
}
