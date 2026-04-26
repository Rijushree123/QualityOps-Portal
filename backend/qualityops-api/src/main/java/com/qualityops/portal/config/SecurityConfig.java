package com.qualityops.portal.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

		http.cors(cors -> {
		}).csrf(csrf -> csrf.disable())
				.authorizeHttpRequests(auth -> auth.requestMatchers(HttpMethod.POST, "/api/auth/login").permitAll()
						.requestMatchers(HttpMethod.POST, "/api/auth/signup").permitAll()
						.requestMatchers(HttpMethod.GET, "/api/health").permitAll()
						.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated())
				.formLogin(form -> form.disable()).httpBasic(httpBasic -> httpBasic.disable());

		return http.build();
	}
}