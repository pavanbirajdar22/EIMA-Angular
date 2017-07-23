import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map'
import {Project} from '../classes/project';
import {Client} from '../classes/client';
import {Department} from '../classes/department';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  deptId: number = null;
  department: Department;
  projects: Project[] = new Array();
  employees: any = new Array();

  constructor(private departmentService: DepartmentService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.deptId = +params['deptId'];
      this.departmentService.getDepartmentById(this.deptId).subscribe(department => this.department = department);
      this.departmentService.getProjectsById(this.deptId).subscribe(projects => this.projects = projects._embedded.projects);
      this.departmentService.getEmployeesById(this.deptId).subscribe(employees => this.employees = employees._embedded.employees);
    });

  }

}
