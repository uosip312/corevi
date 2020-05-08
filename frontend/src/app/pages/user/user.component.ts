import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';
import { AuthServiceService } from '../../auth/auth-service.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent implements OnInit {
  users: User[];
  selectedUser: User = {
    id: null,
    name: null,
    user: null,
    role: null,
    pass: null,
  };
  role: number;
  searchText: string;
  constructor(
    private userApi: UserApiService,
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit() {
    this.checkRole();
    this.getUsers();
  }

  checkRole() {
    this.role = Number(localStorage.getItem('role'));
    if (this.role === 2 ) {
      this.router.navigate(['/inicio']);
    }
  }

  getUsers() {
    return this.userApi.readUser().subscribe((res: User[]) => {
      this.users = res;
    });
  }

  deleteUser(id, name: string) {
    Swal.fire({
      icon: 'warning',
      title: `Estas seguro que deseas eliminar a ${name}`,
      text: 'No podras revertir esta acción',
      showCancelButton: true,
      cancelButtonColor: '#d9534f',
      confirmButtonColor: '#5cb85c',
      allowOutsideClick: false,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {
      if (result.value) {
        this.userApi.deleteUser(id).subscribe((datos) => {
          if (datos['resultado'] === true) {
            Swal.fire({
              title: 'Eliminado!',
              text: 'El Usuario ha sido eliminada.',
              icon: 'success',
              timer: 1500,
            });
            this.getUsers();
          }
        });
      } else {
        Swal.fire({
          title: 'Cancelado',
          text: 'No ha sido eliminado :)',
          icon: 'error',
          timer: 1500,
        });
      }
    });
  }

  addUser() {
    this.router.navigate(['/usuarios/agregar']);
  }
}
