import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  header = new HttpHeaders().set('Content-Type', 'application/json');
  baseUrl = environment.apiUrl;
  public error = null;

  constructor(private http: HttpClient, public router: Router) {}

  login(user: string, pass: string) {
    return this.http.post(`${this.baseUrl}/login`, { user, pass }).subscribe(
      (result: any) => {
        localStorage.setItem('access_token', result.token);
        localStorage.setItem('userId', result.userId);
        localStorage.setItem('name', result.name);
        localStorage.setItem('role', result.role);
        this.router.navigate(['/inicio']);
        return result;
      },
      (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: `Oops... ${JSON.stringify(error.error.error)}`,
          allowOutsideClick: false,
          showConfirmButton: false,
          timer: 2500
        });
      }
    );
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
      // Elimina usuario del almacenamiento local para desloguearlo
      const removeToken = localStorage.removeItem('access_token');
      localStorage.removeItem('userId');
      localStorage.removeItem('name');
      localStorage.removeItem('role');
      if (removeToken == null) {
        this.router.navigate(['/login']);
      }
  }
}
