import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

import {
  EmployeeService,
  Employee,
} from '../../core/services/employee.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  searchText: string = '';
  loading: boolean = false;
  errorMessage: string | null = null;
  isSaving = false;

  constructor(
    private employeeService: EmployeeService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  // 🔹 Load all employees
  loadEmployees(): void {
    this.loading = true;
    this.employeeService.getAllEmployees(0,5).subscribe({
      next: (data) => {
        this.employees = data.content;
        this.loading = false;
      },
      error: (err) => {
        this.toast.show('Failed to load employees', 'error');
        this.loading = false;
      },
    });
  }

  // 🔹 Delete employee
  deleteEmployee(id: number): void {
    const confirmDelete = confirm(
      'Are you sure you want to delete this employee?',
    );
    if (!confirmDelete) return;

    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.loadEmployees();
        this.toast.show('Employee deleted successfully', 'success'); // Show success message
      },
      error: (err) => {
        this.toast.show(err.error?.message || 'Delete failed', 'error');
      },
    });
  }

  // 🔹 Search employee
  search(): void {
    if (this.searchText.trim()) {
      this.employeeService.searchEmployees(this.searchText).subscribe({
        next: (data) => {
          this.employees = data;
        },
        error: (err) => {
          this.toast.show(err.error?.message || 'Search failed', 'error');
        },
      });
    } else {
      this.loadEmployees();
    }
  }

  // 🔹 Modal state
  showModal: boolean = false;
  //for edit mode
  isEditMode: boolean = false;
  //to hold the id of employee being edited
  selectedEmployeeId: number | null = null;

  // 🔹 Form model
  newEmployee: Employee = {
    name: '',
    email: '',
    department: '',
    designation: '',
    salary: null,
    joiningDate: '',
    status: 'ACTIVE',
  };

  // 🔹 Open modal
  openModal() {
    this.isEditMode = false;
    this.errorMessage = null; // Clear previous errors

    this.newEmployee = {
      name: '',
      email: '',
      department: '',
      designation: '',
      salary: null,
      joiningDate: '',
      status: 'ACTIVE',
    };

    this.showModal = true;
  }

  // 🔹 Close modal
  closeModal() {
    this.errorMessage = null; // Clear error on close
    this.showModal = false;
    this.isEditMode = false;
    this.selectedEmployeeId = null;
  }

  // 🔹 Create employee
  // createEmployee() {
  //   this.employeeService.createEmployee(this.newEmployee).subscribe({
  //     next: () => {
  //       this.closeModal();
  //       this.loadEmployees();

  //       // Reset form
  //       this.newEmployee = {
  //         name: '',
  //         email: '',
  //         department: '',
  //         designation: '',
  //         salary: 0,
  //         joiningDate: '',
  //         status: 'ACTIVE',
  //       };
  //     },
  //     error: (err) => {
  //       console.error('Create failed:', err);
  //     },
  //   });
  // }

  // Update Empolyee🔹
  editEmployee(emp: Employee) {
    this.isEditMode = true;
    if (!emp.id) return;
    this.selectedEmployeeId = emp.id;

    this.newEmployee = { ...emp }; // pre-fill form

    this.showModal = true;
  }

  // Create or Update Employee based on mode
  saveEmployee() {
    this.isSaving = true;
    if (this.isEditMode && this.selectedEmployeeId) {
      // 🔹 UPDATE
      this.employeeService
        .updateEmployee(this.selectedEmployeeId, this.newEmployee)
        .pipe(finalize(() => (this.isSaving = false)))
        .subscribe({
          next: () => {
            this.closeModal();
            this.loadEmployees();
            this.toast.show('Employee updated successfully', 'success'); // Show success message
          },
          error: (err) => {
            this.toast.show('Update failed', 'error');
          },
        });
    } else {
      // 🔹 CREATE
      this.employeeService
        .createEmployee(this.newEmployee)
        .pipe(finalize(() => (this.isSaving = false)))
        .subscribe({
          next: () => {
            this.closeModal();
            this.loadEmployees();
            this.errorMessage = null; // Clear error on success
            this.toast.show('Employee created successfully', 'success'); // Show success message
          },
          error: (err) => {
            this.toast.show('Create failed', 'error');
            // this.errorMessage = 'Failed to create employee. Please try with different email.';
            this.errorMessage = err.error?.message || 'Something went wrong';
          },
        });
    }
  }

  viewEmployee(id: number) {
    this.router.navigate(['/employees', id]);
  }
}
