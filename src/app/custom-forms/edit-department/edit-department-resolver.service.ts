import { Observable } from 'rxjs/Observable';
import { Department } from './../create-department-form/department';
import { ActivatedRouteSnapshot } from '@angular/router';
import { EditDepartmentService } from './edit-department.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EditDepartmentResolverService {

  deptId: any
  constructor(private editDepartmentService: EditDepartmentService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Department> {

    this.deptId = +route.params['deptId']
    return this.editDepartmentService.getDepartment(this.deptId)

  }
}
