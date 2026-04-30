import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  pageTitle = "Dashboard";
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        const url = this.router.url;
        if(url.includes('dashboard') ) this.pageTitle = "Dashboard";
        else if(url.includes('employees') ) this.pageTitle = "Employee List";
        else if(url.includes('departments') ) this.pageTitle = "Departments";
        else if(url.includes('leave-requests') ) this.pageTitle = "Leave Requests";
        else if(url.includes('test-cases') ) this.pageTitle = "Test Cases";
        else if(url.includes('test-runs') ) this.pageTitle = "Test Runs";
        else if(url.includes('defects') ) this.pageTitle = "Defects";
        else if(url.includes('reports') ) this.pageTitle = "Reports";
      }
    })
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}