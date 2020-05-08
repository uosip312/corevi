import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from '../../services/dashboard-api.service';
import { Visit } from '../../model/visit';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  contarperson = { personas: null };
  person: any;
  contarvisit = { visitas: null };
  visit: any;
  contardepart = { departamentos: null };
  depart: any;
  contaruser = { usuarios: null };
  user: any;
  visitPendientes: Visit[];
  contarViDe: Visit[];
  constructor(private dashboardApi: DashboardApiService) {}

  ngOnInit() {
    this.contarPerson();
    this.contarVisit();
    this.contarDepartment();
    this.contarUser();
    this.visitasPendientes();
    this.contarVisitDepartment();
  }

  contarPerson() {
    return this.dashboardApi.contarPerson().subscribe((result) => {
      this.contarperson = result['0'];
      this.person = this.contarperson.personas;
    });
  }
  contarVisit() {
    return this.dashboardApi.contarVisit().subscribe((result) => {
      this.contarvisit = result['0'];
      this.visit = this.contarvisit.visitas;
    });
  }
  contarDepartment() {
    return this.dashboardApi.contarDepartment().subscribe((result) => {
      this.contardepart = result['0'];
      this.depart = this.contardepart.departamentos;
    });
  }
  contarUser() {
    return this.dashboardApi.contarUser().subscribe((result) => {
      this.contaruser = result['0'];
      this.user = this.contaruser.usuarios;
    });
  }
  visitasPendientes() {
    return this.dashboardApi.visitasPendientes().subscribe((result: Visit[]) => {
      this.visitPendientes = result;
    });
  }

  contarVisitDepartment() {
    return this.dashboardApi.contarVisitDepartment().subscribe((result: Visit[]) => {
      this.contarViDe = result;
    });
  }
}
