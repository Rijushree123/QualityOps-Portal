import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  EmployeeService,
  Employee,
} from '../../core/services/employee.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee | null = null;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private toast: ToastService,
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id || isNaN(id)) {
      this.toast.show('Invalid employee ID', 'error');
      this.router.navigate(['/employees']);
      return;
    }
    this.getEmployee(id);
  }

  getEmployee(id: number) {
    this.loading = true;

    this.employeeService.getEmployeeById(id).subscribe({
      next: (data) => {
        this.employee = data;
        this.loading = false;
      },
      error: (err) => {
        this.toast.show(
          err.error?.message || 'Failed to load employee',
          'error',
        );
        this.loading = false;
        this.router.navigate(['/employees']); // ✅ redirect ONLY here
      },
    });
  }
  goBack() {
    this.location.back();
  }
}
