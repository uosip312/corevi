import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonApiService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  readPerson() {
    return this.httpClient.get(`${this.baseUrl}/ver-person`);
  }
  selectPerson(id: number | string) {
    return this.httpClient.get(`${this.baseUrl}/seleccionar-person?id=${id}`);
  }
  createPerson(person: Person) {
    return this.httpClient.post(`${this.baseUrl}/crear-person`, person);
  }

  updatePerson(person: Person) {
    return this.httpClient.put(`${this.baseUrl}/actualiza-person`, person);
  }
  deletePerson(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/eliminar-person?id=${id}`);
  }
}
