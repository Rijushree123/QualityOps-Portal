package com.qualityops.portal.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeRequest {

	private String name;
	private String email;
	private String department;
	private String designation;
	private Double salary;
	private LocalDate joiningDate;
	private String status;
}