import { Department } from './../../classes/department';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EditDepartmentService {

  constructor(private http: Http) { }
  deptId:any
  getDepartment(deptId: any) {
    this.deptId=deptId
    return this.http.get("http://localhost:8080/departments/" + deptId).map(resp => resp.json())
  }

  editDepartment(department:Department){
    return this.http.patch("http://localhost:8080/departments/"+this.deptId,department).map(resp => resp.json())

  }
}
