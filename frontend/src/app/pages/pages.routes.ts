import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonComponent } from './person/person.component';
import { VisitComponent } from './visit/visit.component';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';
import { AddPersonComponent } from './person/add-person/add-person.component';
import { EditPersonComponent } from './person/edit-person/edit-person.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { EditDepartmentComponent } from './department/edit-department/edit-department.component';
import { ProfileComponent } from './profile/profile.component';
import { AddVisitComponent } from './visit/add-visit/add-visit.component';
import { EditVisitComponent } from './visit/edit-visit/edit-visit.component';
import { AuthConfigGuard } from '../auth/auth-config.guard';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

const pagesRoute: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthConfigGuard],
    children: [
      { path: 'inicio', component: DashboardComponent },
      { path: 'personas', component: PersonComponent },
      { path: 'personas/agregar', component: AddPersonComponent },
      { path: 'personas/editar/:id', component: EditPersonComponent },
      { path: 'visitas', component: VisitComponent },
      { path: 'visitas/agregar', component: AddVisitComponent },
      { path: 'visitas/agregarconper/:idPerson', component: AddVisitComponent },
      { path: 'visitas/editar/:id', component: EditVisitComponent},
      { path: 'departamentos', component: DepartmentComponent },
      { path: 'departamentos/agregar', component: AddDepartmentComponent },
      { path: 'departamentos/editar/:id', component: EditDepartmentComponent },
      { path: 'usuarios', component: UserComponent },
      { path: 'usuarios/agregar', component: AddUserComponent },
      { path: 'usuarios/editar/:id', component: EditUserComponent },
      { path: 'perfil', component: ProfileComponent},
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    ],
  },
];

@NgModule({
    imports: [
        RouterModule.forChild( pagesRoute )
    ],
    exports: [
        RouterModule
    ]
})

export class PagesRoutes { }
