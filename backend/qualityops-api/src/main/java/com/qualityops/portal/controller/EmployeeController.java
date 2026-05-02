package com.qualityops.portal.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.qualityops.portal.dto.EmployeeRequest;
import com.qualityops.portal.entity.Employee;
import com.qualityops.portal.service.EmployeeService;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

	private final EmployeeService employeeService;

	public EmployeeController(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

	@PostMapping
	public Employee createEmployee(@RequestBody EmployeeRequest request) {
		return employeeService.createEmployee(request);
	}

	@GetMapping
	public Page<Employee> getAllEmployees(Pageable pageable) {
		return employeeService.getAllEmployees(pageable);
	}

	@GetMapping("/{id}")
	public Employee getEmployee(@PathVariable Long id) {
		return employeeService.getEmployeeById(id);
	}

	@PutMapping("/{id}")
	public Employee updateEmployee(@PathVariable Long id, @RequestBody EmployeeRequest request) {
		return employeeService.updateEmployee(id, request);
	}

	@DeleteMapping("/{id}")
	public void deleteEmployee(@PathVariable Long id) {
		employeeService.deleteEmployee(id);
	}

	@GetMapping("/search")
	public List<Employee> search(@RequestParam String name) {
		return employeeService.searchByName(name);
	}
}