import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Employee } from '../create-employee-form/employee';
import { EditEmployeeService } from '../edit-employee/edit-employee.service';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';
@Injectable()
export class EditemployeeresolverService implements Resolve<Employee>{

  eid:number;

  constructor(private editEmployeeService: EditEmployeeService,private userService:UserService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Employee> {

    this.eid = +route.params['eid']

    return this.editEmployeeService.getEmployee(this.eid)
  }
}
