import { Component, OnInit } from '@angular/core';
import { PersonApiService } from 'src/app/services/person-api.service';
import { Person } from 'src/app/model/person';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: [],
})
export class PersonComponent implements OnInit {
  persons: Person[];
  selectedPerson: Person = {
    id: null,
    nombre: null,
    cedula: null,
    telefono: null,
  };
  searchText: string;
  // tslint:disable: no-string-literal
  constructor(private personApi: PersonApiService, private router: Router) {}

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    return this.personApi.readPerson().subscribe((persons: Person[]) => {
      this.persons = persons;
    });
  }

  deletePerson(id, nombre: string) {
    Swal.fire({
      icon: 'warning',
      title: `Estas seguro que deseas eliminar a ${nombre}`,
      text: 'No podras revertir esta acción',
      showCancelButton: true,
      cancelButtonColor: '#d9534f',
      confirmButtonColor: '#5cb85c',
      allowOutsideClick: false,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {
      if (result.value) {
        this.personApi.deletePerson(id).subscribe((datos) => {
          if (datos['resultado'] === true) {
            Swal.fire({title: 'Eliminado!', text: 'La Persona ha sido eliminada.', icon: 'success', timer: 1500});
            this.getPersons();
          }
        });
      } else {
        Swal.fire({title: 'Cancelado', text: 'No ha sido eliminada :)', icon: 'error', timer: 1500});
      }
    });
  }

  addPerson() {
    this.router.navigate(['/personas/agregar']);
  }

}
