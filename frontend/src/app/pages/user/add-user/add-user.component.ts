import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserApiService } from 'src/app/services/user-api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [],
})
export class AddUserComponent implements OnInit {
  user: User = {
    id: null,
    name: null,
    user: null,
    role: null,
    pass: null
  };

  constructor(private userApi: UserApiService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userApi.createUser(this.user).subscribe((result) => {
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

  volver() {
    this.router.navigate(['/usuarios']);
  }
}
