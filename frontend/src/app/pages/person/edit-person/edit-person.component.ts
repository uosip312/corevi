import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonApiService } from 'src/app/services/person-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styles: [],
  providers: [PersonApiService],
})
export class EditPersonComponent implements OnInit {
  public person: Person = {
    nombre: '',
    cedula: '',
    telefono: '',
  };
  constructor(
    private personApi: PersonApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idPerson = this.route.snapshot.paramMap.get('id');
    this.personApi.selectPerson(idPerson).subscribe((person: Person) => {
      this.person = person['0'];
    });
  }

  volver() {
    this.router.navigate(['/personas']);
  }

  onSubmit() {
    this.personApi.updatePerson(this.person).subscribe((result) => {
      // tslint:disable: no-string-literal
      if (result['resultado'] === true) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: result['mensaje'],
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/personas']);
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: result['mensaje'],
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }
}
