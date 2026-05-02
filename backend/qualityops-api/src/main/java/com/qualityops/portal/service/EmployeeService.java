package com.qualityops.portal.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.qualityops.portal.dto.EmployeeRequest;
import com.qualityops.portal.entity.Employee;
import com.qualityops.portal.exception.BadRequestException;
import com.qualityops.portal.repository.EmployeeRepository;

@Service
public class EmployeeService {

	private final EmployeeRepository employeeRepository;

	public EmployeeService(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	// CREATE
	public Employee createEmployee(EmployeeRequest request) {
		if (employeeRepository.existsByEmail(request.getEmail())) {
			throw new BadRequestException("Email already Exists");
		}
		Employee employee = Employee.builder().name(request.getName()).email(request.getEmail())
				.department(request.getDepartment()).designation(request.getDesignation()).salary(request.getSalary())
				.joiningDate(request.getJoiningDate()).status(request.getStatus()).build();

		return employeeRepository.save(employee);
	}

	// GET ALL
	public Page<Employee> getAllEmployees(Pageable pageable) {
		return employeeRepository.findAll(pageable);
	}

	// GET BY ID
	public Employee getEmployeeById(Long id) {
		return employeeRepository.findById(id).orElseThrow(() -> new BadRequestException("Employee not found"));
	}

	// UPDATE
	public Employee updateEmployee(Long id, EmployeeRequest request) {
		Employee employee = getEmployeeById(id);

		employee.setName(request.getName());
		employee.setEmail(request.getEmail());
		employee.setDepartment(request.getDepartment());
		employee.setDesignation(request.getDesignation());
		employee.setSalary(request.getSalary());
		employee.setJoiningDate(request.getJoiningDate());
		employee.setStatus(request.getStatus());

		return employeeRepository.save(employee);
	}

	// DELETE
	public void deleteEmployee(Long id) {
		employeeRepository.deleteById(id);
	}

	// SEARCH
	public List<Employee> searchByName(String name) {
		return employeeRepository.findByNameContainingIgnoreCase(name);
	}
}