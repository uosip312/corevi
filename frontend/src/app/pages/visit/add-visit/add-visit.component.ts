import { Component, OnInit } from '@angular/core';
import { Visit } from '../../../model/visit';
import { VisitApiService } from '../../../services/visit-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Status } from '../../../model/status';
import { Department } from '../../../model/department';
import { Person } from '../../../model/person';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styles: [],
})
export class AddVisitComponent implements OnInit {
  visits: Visit = {
    id: null,
    idPersona: null,
    idDepartamento: null,
    idEstatus: null,
    idUser: Number(localStorage.getItem('userId')),
    Fecha: null,
    HoraEntrada: null,
    HoraSalida: null,
    Observacion: null,
    nombre: null,
    status: null,
    department: null,
    visitas: null
  };

  status: Status[];
  departments: Department[];
  persons: Person[];
  recepcionista = localStorage.getItem('name');

  constructor(
    private visitApi: VisitApiService,
    private router: Router,
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    const idPerson = this.route.snapshot.paramMap.get('idPerson');
    if (idPerson !== '' && idPerson !== null) {
      this.visits.idPersona = Number(idPerson);
    }
    this.verEstatusDepartamentoPersona();
  }

  verEstatusDepartamentoPersona() {
    this.visitApi
      .verEstatus()
      .subscribe((res: Status[]) => (this.status = res));
    this.visitApi
      .verDepartamentos()
      .subscribe((res: Department[]) => (this.departments = res));
    this.visitApi
      .verPersona()
      .subscribe((res: Person[]) => (this.persons = res));
  }

  volver() {
    this.router.navigate(['/visitas']);
  }

  onSubmit() {
    this.visitApi.crearVisit(this.visits).subscribe((result) => {
      // tslint:disable: no-string-literal
      if (result['resultado'] === true) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: result['mensaje'],
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/visitas']);
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
