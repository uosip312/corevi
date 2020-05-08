import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  readUser() {
    return this.httpClient.get(`${this.baseUrl}/ver-user`);
  }
  selectUser(id: number | string) {
    return this.httpClient.get(`${this.baseUrl}/seleccionar-user?id=${id}`);
  }
  createUser(user: User) {
    return this.httpClient.post(`${this.baseUrl}/crear-user`, user);
  }

  updateUser(user: User) {
    return this.httpClient.put(`${this.baseUrl}/actualiza-user`, user);
  }
  deleteUser(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/eliminar-user?id=${id}`);
  }
}
