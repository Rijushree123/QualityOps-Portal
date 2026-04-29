import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  fullname = '';
  email = '';
  password = '';
  confirmPassword = '';
  
  error = '';
  success = '';
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  signup() {
    const payload = {
      fullName: this.fullname,
      email: this.email,
      password: this.password,
    };

    this.authService.signup(payload).subscribe({
      next: () => {
        this.success = 'Signup successful! Please log in.';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
      },
      error: () => {
        this.error = 'Signup Failed. Please try again.';
      }
    });
  }
}
