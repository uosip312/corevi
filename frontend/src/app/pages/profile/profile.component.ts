import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserApiService } from 'src/app/services/user-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../../auth/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  user: User = {
    id: null,
    name: null,
    user: null,
    role: null,
    pass: null,
  };

  constructor(
    private userApi: UserApiService,
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    const idUser = localStorage.getItem('userId');
    this.userApi.selectUser(idUser).subscribe((user: User) => {
      this.user = user['0'];
      this.user.pass = 'poner contraseña';
    });
  }

  onSubmit() {
    this.userApi.updateUser(this.user).subscribe((result) => {
      // tslint:disable: no-string-literal
      if (result['resultado'] === true) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: result['mensaje'],
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/usuarios']);
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: result['mensaje'],
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}
