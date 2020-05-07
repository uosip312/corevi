import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/department';
import { DeparmentApiService } from 'src/app/services/deparment-api.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styles: [],
})
export class EditDepartmentComponent implements OnInit {
  departments: Department = {
    id: null,
    department: null,
  };
  constructor(
    private departmentApi: DeparmentApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idDepartment = this.route.snapshot.paramMap.get('id');
    this.departmentApi
      .selectDeparment(idDepartment)
      .subscribe((departments: Department) => {
        this.departments = departments['0'];
      });
  }

  volver() {
    this.router.navigate(['/departamentos']);
  }

  onSubmit() {
    this.departmentApi.updateDeparment(this.departments).subscribe((result) => {
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
}
