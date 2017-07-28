import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Employee } from './employee';

@Injectable()
export class CreateEmployeeService {

  constructor(private http: Http) { }

  createEmployee(employee: any) {
   
    return this.http.post("http://10.1.16.38:8080/employee/create", employee).map(resp => resp.json())
    
  }

  getAllClients() {
    return this.http.get("http://localhost:8080/clients").map(resp => resp.json())
  }

  getAllDepartments() {
    return this.http.get("http://localhost:8080/departments").map(resp => resp.json())
  }

  getAllProjects(){
    return this.http.get("http://localhost:8080/projects").map(resp => resp.json())
  }
}
