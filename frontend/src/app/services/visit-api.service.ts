import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visit } from '../model/visit';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class VisitApiService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getVisit() {
    return this.httpClient.get(`${this.baseUrl}/ver-visits`);
  }

  deleteVisit(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/eliminar-visit?id=${id}`);
  }

  selectVisit(id: number | string) {
    return this.httpClient.get(`${this.baseUrl}/seleccionar-visit?id=${id}`);
  }

  verEstatus() {
    return this.httpClient.get(`${this.baseUrl}/ver-estatus`);
  }

  verDepartamentos() {
    return this.httpClient.get(`${this.baseUrl}/ver-department`);
  }

  verPersona() {
    return this.httpClient.get(`${this.baseUrl}/ver-person`);
  }

  actualizarVisit(visit: Visit) {
    return this.httpClient.put(`${this.baseUrl}/actualizar-visit`, visit);
  }

  crearVisit(visit: Visit) {
    return this.httpClient.post(`${this.baseUrl}/crear-visit`, visit);
  }
}
