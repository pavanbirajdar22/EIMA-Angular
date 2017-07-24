import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/client';
import { Project } from '../classes/project';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../classes/department';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  pid: number = null;
  project: Project;
  client: Client = null;
  team: any = new Array();
  department: Department = null;

  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pid = +params['pid'];
      this.projectService.getProjectByPid(this.pid).subscribe(project => this.project = project);
      this.projectService.getClientByPid(this.pid).subscribe(client => this.client = client);
      this.projectService.getTeamByPid(this.pid).subscribe(team => this.team = team._embedded.employees);
      this.projectService.getDepartmentByPid(this.pid).subscribe(department => this.department = department);
    });
  }

}
