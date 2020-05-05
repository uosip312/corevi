import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  header = new HttpHeaders().set('Content-Type', 'application/json');
  baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  login(user: string, pass: string) {
    return this.http.post(`${this.baseUrl}/login`, {user, pass})
    .subscribe(( result: any) => {
      console.log(result);
      localStorage.setItem('access_token', result.token);
      this.router.navigate(['/inicio']);
      return result;
    });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    // Elimina usuario del almacenamiento local para desloguearlo
    const removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/login']);
    }
  }
}
