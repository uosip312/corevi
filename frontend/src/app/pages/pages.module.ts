import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutes } from './pages.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { DepartmentComponent } from './department/department.component';
import { PersonComponent } from './person/person.component';
import { VisitComponent } from './visit/visit.component';
import { UserComponent } from './user/user.component';
import { ReportComponent } from './report/report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

import { PersonApiService } from '../services/person-api.service';
import { EditPersonComponent } from './person/edit-person/edit-person.component';
import { AddPersonComponent } from './person/add-person/add-person.component';
import { EditDepartmentComponent } from './department/edit-department/edit-department.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { ProfileComponent } from './profile/profile.component';
import { AddVisitComponent } from './visit/add-visit/add-visit.component';
import { EditVisitComponent } from './visit/edit-visit/edit-visit.component';

@NgModule({
  declarations: [
    DepartmentComponent,
    PersonComponent,
    VisitComponent,
    UserComponent,
    ReportComponent,
    DashboardComponent,
    PagesComponent,
    EditPersonComponent,
    AddPersonComponent,
    EditDepartmentComponent,
    AddDepartmentComponent,
    ProfileComponent,
    AddVisitComponent,
    EditVisitComponent],
  exports: [
    PagesComponent,
    DashboardComponent,
    DepartmentComponent,
    PersonComponent,
    VisitComponent,
    UserComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    BrowserModule,
    SweetAlert2Module,
    FormsModule,
    PagesRoutes
  ],
  providers: [PersonApiService],
})
export class PagesModule { }
