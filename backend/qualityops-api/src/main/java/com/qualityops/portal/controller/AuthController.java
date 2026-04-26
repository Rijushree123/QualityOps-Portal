package com.qualityops.portal.controller;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qualityops.portal.dto.LoginRequest;
import com.qualityops.portal.dto.RegisterRequest;
import com.qualityops.portal.entity.User;
import com.qualityops.portal.repository.UserRepository;
import com.qualityops.portal.security.JwtUtil;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

	private final UserRepository userRepository;
	private final BCryptPasswordEncoder passwordEncoder;
	private final JwtUtil jwtUtil;

	@PostMapping("/signup")
	public String signup(@RequestBody RegisterRequest request) {

		if (userRepository.findByEmail(request.getEmail()).isPresent()) {
			return "Email already exists";
		}

		User user = User.builder().fullName(request.getFullName()).email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword())).role("EMPLOYEE").build();

		userRepository.save(user);

		return "User Registered Successfully";
	}

	@PostMapping("/login")
	public String login(@RequestBody LoginRequest request) {

		User user = userRepository.findByEmail(request.getEmail())
				.orElseThrow(() -> new RuntimeException("User not found"));

		if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
			throw new RuntimeException("Invalid password");
		}

		return jwtUtil.generateToken(user.getEmail());
	}
}
