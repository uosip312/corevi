import { Component, OnInit } from '@angular/core';
import { Visit } from '../../model/visit';
import { VisitApiService } from '../../services/visit-api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styles: [],
})
export class VisitComponent implements OnInit {
  visits: Visit[];
  selectedVisit: Visit = {
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

  readVisit = {
    Fecha: null,
    HoraEntrada: null,
    HoraSalida: null,
    Observacion: null,
    department: null,
    id: null,
    idUser: null,
    nombre: null,
    status: null,
  };

  constructor(private visitApi: VisitApiService, private route: Router) {}

  ngOnInit() {
    this.getVisit();
  }

  getVisit() {
    this.visitApi
      .getVisit()
      .subscribe((result: any) => (this.readVisit = result));
  }

  deleteVisit(id) {
    Swal.fire({
      icon: 'warning',
      title: `Estas seguro que deseas eliminar la visita`,
      text: 'No podras revertir esta acción',
      showCancelButton: true,
      cancelButtonColor: '#d9534f',
      confirmButtonColor: '#5cb85c',
      allowOutsideClick: false,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {
      if (result.value) {
        this.visitApi.deleteVisit(id).subscribe((datos) => {
          if (datos['resultado'] === true) {
            Swal.fire({
              title: 'Eliminado!',
              text: 'El Registro ha sido eliminado.',
              icon: 'success',
              timer: 1500,
            });
            this.getVisit();
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
