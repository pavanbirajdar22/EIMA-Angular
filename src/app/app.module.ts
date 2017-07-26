import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { MdCardModule, MdButtonModule, MdPaginatorModule, MdDialogModule, MdSnackBarModule } from '@angular/material';
import { RouterModule, ActivatedRouteSnapshot, Router } from '@angular/router'
import { UserService } from './services/user.service';
import { ClientService } from './services/client.service';
import { DepartmentService } from './services/department.service';
import { ProjectService } from './services/project.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProjectComponent } from './project/project.component';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { DepartmentComponent } from './department/department.component';
import { AllClientsComponent } from './all-clients/all-clients.component';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContainerComponent } from './container/container.component';
import { SearchService } from './services/search.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginAuthService } from './services/login-auth.service';
import { LoginService } from './services/login.service';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { CreateClientFormComponent } from './custom-forms/create-client-form/create-client-form.component';
import { CreateProjectFormComponent } from './custom-forms/create-project-form/create-project-form.component';
import { CreateDepartmentFormComponent } from './custom-forms/create-department-form/create-department-form.component';
import { CreateEmployeeFormComponent } from './custom-forms/create-employee-form/create-employee-form.component';
import { CreateEmployeeService } from './custom-forms/create-employee-form/create-employee.service';
import { CreateProjectService } from './custom-forms/create-project-form/create-project.service';
import { CreateDepartmentService } from './custom-forms/create-department-form/create-department.service';
import { CreateClientService } from './custom-forms/create-client-form/create-client.service';

const routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginAuthService],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [LoginAuthService],
      },
      {
        path: 'employees',
        component: AllEmployeesComponent,
        canActivate: [LoginAuthService],
        children: [
          { path: ':eid', component: EmployeeComponent }
        ]
      },
      {
        path: 'projects',
        component: AllProjectsComponent,
        canActivate: [LoginAuthService],
        children: [
          { path: ':pid', component: ProjectComponent }
        ]
      },
      {
        path: 'departments',
        component: AllDepartmentsComponent,
        canActivate: [LoginAuthService],
        children: [
          { path: ':deptId', component: DepartmentComponent }
        ]
      },
      {
        path: 'clients',
        component: AllClientsComponent,
        canActivate: [LoginAuthService],
        children: [
          { path: ':cid', component: ClientComponent }
        ]
      },
      {
        path: 'reports',
        component: ReportComponent,
        canActivate: [LoginAuthService],
      },
      {
        path: 'add-employee',
        component: CreateEmployeeFormComponent,
        canActivate: [LoginAuthService],
      },
      {
        path: 'add-department',
        component: CreateDepartmentFormComponent,
        canActivate: [LoginAuthService],
      },
      {
        path: 'add-project',
        component: CreateProjectFormComponent,
        canActivate: [LoginAuthService],
      },
      {
        path: 'add-client',
        component: CreateClientFormComponent,
        canActivate: [LoginAuthService],
      },
      {
        path: 'search',
        component: ContainerComponent,
        canActivate: [LoginAuthService],
        children: [
          {
            path: 'project/:pid',
            component: ProjectComponent,
          },
          {
            path: 'employee/:eid',
            component: EmployeeComponent,
          },
          {
            path: 'department/:deptId',
            component: DepartmentComponent,
          },
          {
            path: 'client/:cid',
            component: ClientComponent,
          },
          {
            path: 'not-found',
            component: NotFoundComponent,
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login',
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
    ClientComponent,
    DashboardComponent,
    ContainerComponent,
    NotFoundComponent,
    LoginComponent,
    HomeComponent,
    ReportComponent,
    CreateClientFormComponent,
    CreateDepartmentFormComponent,
    CreateEmployeeFormComponent,
    CreateProjectFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MdCardModule,
    MdButtonModule,
    MdDialogModule,
    MdSnackBarModule,
    BrowserAnimationsModule,
    MdPaginatorModule,
  ],
  providers: [
    UserService,
    ProjectService,
    ClientService,
    DepartmentService,
    SearchService,
    LoginAuthService,
    LoginService,
    CreateEmployeeService,
    CreateProjectService,
    CreateDepartmentService,
    CreateClientService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
