import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  contarPerson() {
    return this.httpClient.get(`${this.baseUrl}/contar-person`);
  }

  contarDepartment() {
    return this.httpClient.get(`${this.baseUrl}/contar-department`);
  }

  contarVisit() {
    return this.httpClient.get(`${this.baseUrl}/contar-visit`);
  }

  contarUser() {
    return this.httpClient.get(`${this.baseUrl}/contar-user`);
  }

  visitasPendientes() {
    return this.httpClient.get(`${this.baseUrl}/ver-vipendientes`);
  }

  contarVisitDepartment() {
    return this.httpClient.get(`${this.baseUrl}/contar-vide`);
  }

}
