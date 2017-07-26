import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Department} from './department';
@Injectable()
export class CreateDepartmentService {

  constructor(private http:Http) { }

  createDepartment(department:Department){
     return this.http.post("http://localhost:8080/departments",department);
   }
}
