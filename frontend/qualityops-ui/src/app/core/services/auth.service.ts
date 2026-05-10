import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data, {
      responseType: 'text'
    });
  }

  signup(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, data, {
      responseType: 'text'
    });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  private decodeToken(): any {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    const payload = token.split('.')[1];
    if (!payload) {
      return null;
    }

    try {
      return JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
    } catch {
      return null;
    }
  }

  getUserRole(): string | null {
    const decoded = this.decodeToken();
    return decoded?.role ?? null;
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'ADMIN';
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}