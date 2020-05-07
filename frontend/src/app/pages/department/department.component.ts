import { Component, OnInit } from '@angular/core';
import { Department } from '../../model/department';
import { DeparmentApiService } from 'src/app/services/deparment-api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styles: [],
})
export class DepartmentComponent implements OnInit {
  departments: Department[];
  selectedDepartment: Department = {
    id: null,
    department: null,
  };
  // tslint:disable: no-string-literal
  constructor(
    private departmentApi: DeparmentApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getDepartment();
  }

  getDepartment() {
    return this.departmentApi
      .readDeparment()
      .subscribe((departments: Department[]) => {
        this.departments = departments;
      });
  }

  addDepartment() {
    this.router.navigate(['/departamentos/agregar']);
  }

  deleteDepartment(id, department: string) {
    Swal.fire({
      icon: 'warning',
      title: `Estas seguro que deseas eliminar a ${department}`,
      text: 'No podras revertir esta acción',
      showCancelButton: true,
      cancelButtonColor: '#d9534f',
      confirmButtonColor: '#5cb85c',
      allowOutsideClick: false,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {
      if (result.value) {
        this.departmentApi.deleteDepartment(id).subscribe((datos) => {
          if (datos['resultado'] === true) {
            Swal.fire({
              title: 'Eliminado!',
              text: 'El Departamento ha sido eliminado.',
              icon: 'success',
              timer: 1500,
            });
            this.getDepartment();
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
}
