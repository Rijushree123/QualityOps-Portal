package com.qualityops.portal.security;

import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

	private final String SECRET = "qualityopsportalverysecuresecretkey123456";

	public String generateToken(String email) {

		return Jwts.builder().subject(email).issuedAt(new Date())
				.expiration(new Date(System.currentTimeMillis() + 86400000))
				.signWith(Keys.hmacShaKeyFor(SECRET.getBytes())).compact();
	}
}