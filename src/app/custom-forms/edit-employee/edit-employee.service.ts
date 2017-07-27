import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Employee } from '../create-employee-form/employee';
@Injectable()
export class EditEmployeeService {

  eid: any;
  constructor(private http: Http) { }

  getEmployee(eid:number) {
    return this.http.get("http://localhost:8080/employees/" + eid).map(resp => resp.json())

  }

  editEmployee(employee: Employee) {
    return this.http.patch("http://localhost:8080/employees/" + this.eid, employee).map(resp => resp.json())
  }

  getAllDepartments(){
    return this.http.get("http://localhost:8080/departments").map(resp => resp.json())
  }

  getAllClients() {
    return this.http.get("http://localhost:8080/clients").map(resp => resp.json())
  }
}
