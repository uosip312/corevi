import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Department } from '../model/department';

@Injectable({
  providedIn: "root",
})
export class DeparmentApiService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  readDeparment() {
    return this.httpClient.get(`${this.baseUrl}/ver-department`);
  }

  deleteDepartment(id: number) {
    return this.httpClient.delete(
      `${this.baseUrl}/eliminar-department?id=${id}`
    );
  }
  selectDeparment(id: number | string) {
    return this.httpClient.get(
      `${this.baseUrl}/seleccionar-department?id=${id}`
    );
  }
  createDeparment(department: Department) {
    return this.httpClient.post(`${this.baseUrl}/crear-department`, department);
  }

  updateDeparment(department: Department) {
    return this.httpClient.put(
      `${this.baseUrl}/actualiza-department`,
      department
    );
  }
}
