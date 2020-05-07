import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/department';
import { DeparmentApiService } from 'src/app/services/deparment-api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styles: [],
})
export class AddDepartmentComponent implements OnInit {
  departments: Department = {
    id: null,
    department: null,
  };
  constructor(
    private departmentApi: DeparmentApiService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    this.departmentApi.createDeparment(this.departments).subscribe((result) => {
      // tslint:disable: no-string-literal
      if (result['resultado'] === true) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: result['mensaje'],
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/departamentos']);
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
    this.router.navigate(['/departamentos']);
  }
}
