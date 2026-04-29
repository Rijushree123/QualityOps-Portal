import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate:[authGuard] },
  { path: 'employees', component: DashboardComponent, canActivate:[authGuard] },
  { path: 'departments', component: DashboardComponent, canActivate:[authGuard] },
  { path: 'leave-requests', component: DashboardComponent, canActivate:[authGuard] },
  { path: 'test-cases', component: DashboardComponent, canActivate:[authGuard] },
  { path: 'test-runs', component: DashboardComponent, canActivate:[authGuard] },
  { path: 'defects', component: DashboardComponent, canActivate:[authGuard] },
  { path: 'reports', component: DashboardComponent, canActivate:[authGuard] },
  {path: '**', redirectTo: 'login'}
];