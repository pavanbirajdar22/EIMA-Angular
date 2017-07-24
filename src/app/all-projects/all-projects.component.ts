import {Component, OnInit} from '@angular/core';
import {MdButton, MdCard, MdSidenav, MdSidenavContainer} from '@angular/material';
import {Router} from '@angular/router'
import {Project} from '../classes/project';
import {ProjectService} from '../services/project.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  projects: Project[] = [];
  totalProjectCount = 0
  permissions:any;


  constructor(private router: Router, private projectService: ProjectService) {

  }

  ngOnInit() {
    this.permissions=JSON.parse(sessionStorage.getItem("currentUserPermission"));
    this.projectService.getAllProjects(0).subscribe(ele => {
      this.totalProjectCount = ele.json().page.totalElements
      this.projects = ele.json()._embedded.projects;
    });
  }

  onPageChange(event) {
    this.projectService.getAllProjects(event.pageIndex).subscribe(project => this.projects = project.json()._embedded.projects);
  }

}
