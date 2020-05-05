import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonApiService } from '../../../services/person-api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

// tslint:disable: quotemark
@Component({
  selector: "app-add-person",
  templateUrl: "./add-person.component.html",
  styles: [],
})
export class AddPersonComponent implements OnInit {
  persons: Person = {
    id: null,
    nombre: null,
    cedula: null,
    telefono: null,
  };

  constructor(private personApi: PersonApiService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.personApi.createPerson(this.persons).subscribe((result) => {
      // tslint:disable: no-string-literal
      if (result["resultado"] === true) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: result["mensaje"],
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(["/personas"]);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: result["mensaje"],
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }

  volver() {
    this.router.navigate(["/personas"]);
  }
}
