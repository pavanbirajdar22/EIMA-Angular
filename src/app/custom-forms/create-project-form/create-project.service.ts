import { Injectable } from '@angular/core';
import { Project } from './project';
import { Http } from '@angular/http';

@Injectable()
export class CreateProjectService {

  constructor(private http:Http) { }
   
  createProject(project:Project){
      console.log(project)
      return this.http.post("http://localhost:8080/projects",project);
  }

  getAllClients(){
    return this.http.get("http://localhost:8080/clients").map(resp => resp.json())
  }

  getAllDepartments(){
    return this.http.get("http://localhost:8080/departments").map(resp => resp.json())
  }
}
