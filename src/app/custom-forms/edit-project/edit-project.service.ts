import { ActivatedRouteSnapshot } from '@angular/router';
import { Project } from './../../classes/project';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EditProjectService {

  constructor(private http: Http) { }
  pid: any
  getProject(pid: any) {
    this.pid = pid
    return this.http.get("http://localhost:8080/projects/" + pid).map(resp => resp.json())

  }

  editProject(project: Project) {
    return this.http.patch("http://localhost:8080/projects/" + this.pid, project).map(resp => resp.json())
  }

  getAllClients() {
    return this.http.get("http://localhost:8080/clients").map(resp => resp.json())
  }

  getAllDepartments() {
    return this.http.get("http://localhost:8080/departments").map(resp => resp.json())
  }
}
