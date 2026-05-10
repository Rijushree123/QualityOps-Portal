package com.qualityops.portal.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qualityops.portal.dto.RoleUpdateRequest;
import com.qualityops.portal.entity.User;
import com.qualityops.portal.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserRepository userRepository;

    @PutMapping("/{id}/role")
    public User updateUserRole(@PathVariable Long id, @RequestBody RoleUpdateRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        String role = request.getRole() == null ? "" : request.getRole().trim().toUpperCase();
        if (role.isEmpty()) {
            throw new RuntimeException("Role must be provided");
        }

        user.setRole(role);
        return userRepository.save(user);
    }
}
