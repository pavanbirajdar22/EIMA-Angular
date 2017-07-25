import { Component, OnInit } from '@angular/core';
import { MdButton, MdCard, MdSidenav, MdSidenavContainer } from '@angular/material';
import { Router } from '@angular/router'
import { Project } from '../classes/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  projects: Project[] = [];
  totalProjectCount = 0
  permissions: any;
  showButton = ['My Projects', 'All Projects']
  toggleFlag = 0
  userId: number
  myProjects = []


  constructor(private router: Router, private projectService: ProjectService) {

  }

  ngOnInit() {
    this.permissions = JSON.parse(sessionStorage.getItem("currentUserPermission"));
    this.projectService.getAllProjects(0).subscribe(ele => {
      this.totalProjectCount = ele.json().page.totalElements
      this.projects = ele.json()._embedded.projects;
    });

    this.userId = +sessionStorage.getItem("currentUserId");

    this.projectService.getMyProjects(this.userId).subscribe(projects => {
      this.myProjects = projects.json()._embedded.projects
      this.totalProjectCount = this.myProjects.length
    });
  }

  onPageChange(event) {
    if (this.toggleFlag === 0) {
      this.projectService.getAllProjects(event.pageIndex).subscribe(project => this.projects = project.json()._embedded.projects);
    }
    else {
      let start = 4 * event.pageIndex
      let end = start + 4
      console.log(start, end)
      this.projects = this.myProjects.slice(start, end)
    }
  }

  showMyProjects() {
    if (this.toggleFlag===0) {
      this.toggleFlag=1
      this.projects=this.myProjects.slice(0,4)
    }
    else {
      this.toggleFlag=0
      this.projectService.getAllProjects(0).subscribe(ele => {
        this.totalProjectCount = ele.json().page.totalElements
        this.projects = ele.json()._embedded.projects;
      });
    }
  }

}
