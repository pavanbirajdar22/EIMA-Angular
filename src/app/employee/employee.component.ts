import {UserService} from '../services/user.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import 'rxjs/add/operator/map'
import { MdDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { CreateClientFormComponent } from '../custom-forms/create-client-form/create-client-form.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  employeeId: number = null;
  employee: any;
  user: any;
  department: string
  permissions:any
  projects: any = new Array();
  gender = ['Male', 'Female'];
  clients: any = new Array();

  constructor(private userService: UserService, private ar: ActivatedRoute,private dialog: MdDialog) {}

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.employeeId = +params['eid'];
      this.userService.getDepartmentById(this.employeeId).subscribe(dept => this.department = dept);
      this.userService.getUserById(this.employeeId).subscribe(user => this.user = user);
      this.userService.getEmployeeById(this.employeeId).subscribe(employee => this.employee = employee);
      this.userService.getProjectsById(this.employeeId).subscribe(projects => this.projects = projects._embedded.projects);
      this.userService.getClientsById(this.employeeId).subscribe(clients => this.clients = clients._embedded.clients);
      // console.log(this.projects);
    });
    let user=JSON.parse(sessionStorage.getItem('currentUser'))
    this.permissions=user.permission
  }

  editPermissions(){
    //this.dialog.open();
  }

}
