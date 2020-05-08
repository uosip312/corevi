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
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { SearchpersonPipe } from './person/searchperson.pipe';
import { SearchvisitPipe } from './visit/searchvisit.pipe';
import { SearchuserPipe } from './user/searchuser.pipe';
import { SearchdepartmentPipe } from './department/searchdepartment.pipe';

@NgModule({
  declarations: [
    DepartmentComponent,
    PersonComponent,
    VisitComponent,
    UserComponent,
    DashboardComponent,
    PagesComponent,
    EditPersonComponent,
    AddPersonComponent,
    EditDepartmentComponent,
    AddDepartmentComponent,
    ProfileComponent,
    AddVisitComponent,
    EditVisitComponent,
    EditUserComponent,
    AddUserComponent,
    SearchpersonPipe,
    SearchvisitPipe,
    SearchuserPipe,
    SearchdepartmentPipe],
  exports: [
    PagesComponent,
    DashboardComponent,
    DepartmentComponent,
    PersonComponent,
    VisitComponent,
    UserComponent
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
