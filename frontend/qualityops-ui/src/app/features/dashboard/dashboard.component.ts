import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  logout() {
  if(confirm('Are you sure you want to logout?')) {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
  
}
