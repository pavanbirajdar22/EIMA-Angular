import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MdCardModule, MdButtonModule, MdPaginatorModule} from '@angular/material';
import {RouterModule, ActivatedRouteSnapshot, Router} from '@angular/router'
import {UserService} from './services/user.service';
import {ClientService} from './services/client.service';
import {DepartmentService} from './services/department.service';
import {ProjectService} from './services/project.service';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

import {AllEmployeesComponent} from './all-employees/all-employees.component';
import {EmployeeComponent} from './employee/employee.component';
import {AllProjectsComponent} from './all-projects/all-projects.component';
import {ProjectComponent} from './project/project.component';
import {AllDepartmentsComponent} from './all-departments/all-departments.component';
import {DepartmentComponent} from './department/department.component';
import {AllClientsComponent} from './all-clients/all-clients.component';
import {ClientComponent} from './client/client.component';

const routes = [
  {
    path: 'employees',
    component: AllEmployeesComponent,
    children: [
      {path: ':eid', component: EmployeeComponent}
    ]
  },
  {
    path: 'projects',
    component: AllProjectsComponent,
    children: [
      {path: ':pid', component: ProjectComponent}
    ]
  },
  {
    path: 'departments',
    component: AllDepartmentsComponent,
    children: [
      {path: ':deptId', component: DepartmentComponent}
    ]
  },
  {
    path: 'clients',
    component: AllClientsComponent,
    children: [
      {path: ':cid', component: ClientComponent}
    ]
  },
  {
    path: 'project/:pid',
    component: ProjectComponent,
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AllEmployeesComponent,
    EmployeeComponent,
    AllProjectsComponent,
    ProjectComponent,
    AllDepartmentsComponent,
    DepartmentComponent,
    AllClientsComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MdCardModule,
    MdButtonModule,
    BrowserAnimationsModule,
    MdPaginatorModule
  ],
  providers: [UserService, ProjectService, ClientService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
