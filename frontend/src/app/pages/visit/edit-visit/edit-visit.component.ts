import { Component, OnInit } from '@angular/core';
import { Visit } from '../../../model/visit';
import { VisitApiService } from '../../../services/visit-api.service';
import { Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Status } from '../../../model/status';
import { Department } from '../../../model/department';
import { Person } from '../../../model/person';

@Component({
  selector: 'app-edit-visit',
  templateUrl: './edit-visit.component.html',
  styles: [],
})
export class EditVisitComponent implements OnInit {
  visits: Visit = {
    id: null,
    idPersona: null,
    idDepartamento: null,
    idEstatus: null,
    idUser: null,
    Fecha: null,
    HoraEntrada: null,
    HoraSalida: null,
    Observacion: null,
  };

  status: Status[];
  departments: Department[];
  persons: Person[];

  constructor(
    private visitApi: VisitApiService,
    private router: Router,
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    const idVisit = this.route.snapshot.paramMap.get('id');
    this.verEstatusDepartamentoPersona();
    return this.httpClient.get(`http://localhost:8080/corevi/backend/public/api/seleccionar-visit?id=${idVisit}`)
    .subscribe((result: Visit) => {
      this.visits = result['0'];
      console.log(result['0']);
    });
  }

  verEstatusDepartamentoPersona() {
    this.visitApi.verEstatus().subscribe((res: Status[]) => this.status = res);
    this.visitApi.verDepartamentos().subscribe((res: Department[]) => this.departments = res);
    this.visitApi.verPersona().subscribe((res: Person[]) => (this.persons = res));
  }

  volver() {
    this.router.navigate(['/visitas']);
  }

  onSubmit() {
    this.visitApi.actualizarVisit(this.visits).subscribe((result) => {
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
