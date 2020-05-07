import { Time } from '@angular/common';

export class Visit {
  id?: number;
  idPersona: number;
  idDepartamento: number;
  idEstatus: number;
  idUser: number;
  Fecha: Date;
  HoraEntrada: Time;
  HoraSalida: Time;
  Observacion: string;
}
