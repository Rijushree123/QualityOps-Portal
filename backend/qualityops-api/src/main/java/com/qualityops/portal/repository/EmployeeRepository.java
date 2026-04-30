package com.qualityops.portal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.qualityops.portal.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	List<Employee> findByNameContainingIgnoreCase(String name);

	boolean existsByEmail(String email);
}