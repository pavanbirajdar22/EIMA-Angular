import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Employee } from './employee';

@Injectable()
export class CreateEmployeeService {

  constructor(private http:Http) { }

  createEmployee(employee:Employee){
     return this.http.post("http://localhost:8080/employees",employee);
   }
  getAllClients(){
    return this.http.get("http://localhost:8080/clients").map(resp => resp.json())
  }

  getAllDepartments(){
    return this.http.get("http://localhost:8080/departments").map(resp => resp.json())
  }
}
