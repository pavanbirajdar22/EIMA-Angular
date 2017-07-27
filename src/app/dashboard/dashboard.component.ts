import { Component, OnInit } from '@angular/core';
import { MdCard, MdDialog } from '@angular/material';
import { Project } from '../classes/project';
import { Client } from '../classes/client';
import { ProjectService } from '../services/project.service';
import { ClientService } from '../services/client.service';
import { UserService } from '../services/user.service';
import { Department } from '../classes/department';
import { EditPermissionByAdminComponent } from '../custom-forms/edit-permission-by-admin/edit-permission-by-admin.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  employee: any;
  user: any;
  department: string
  projectCount: number;
  gender = ['Male', 'Female'];
  clientCount: number;
  year:number;
  manager:any
  permissions:any;

  constructor(private projectService: ProjectService, private clientService: ClientService, private userService: UserService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("currentUser"));
    let userId = this.user.eid
    this.permissions=this.user.permission
    this.userService.getDepartmentById(userId).subscribe(dept => this.department = dept);
    this.userService.getEmployeeById(userId).subscribe(employee => {this.employee = employee});
    this.userService.getProjectsById(userId).subscribe(projects => this.projectCount = projects._embedded.projects.length);
    this.userService.getClientsById(userId).subscribe(clients => this.clientCount = clients._embedded.clients.length);
    this.userService.getManagerById(userId).subscribe(manager=>
      {
        this.manager=manager,console.log(this.manager)
      },err=>
    {
      this.manager=null;
    })
    let date:Date=new Date()
    this.year=+date.getFullYear() 
  }
}
