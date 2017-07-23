import {Injectable} from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DepartmentService {
  constructor(private http: Http) {}

  getAllDepartments(pageNo: number) {
    const apiUrl = 'http://localhost:8080/departments?page=' + pageNo + '&size=4&sort=name'
    return this.http.get(apiUrl);
  }

  getDepartmentById(deptId: number) {
    return this.http.get('http://localhost:8080/departments/' + deptId).map(dept => dept.json());
  }

  getProjectsById(deptId: number) {
    return this.http.get('http://localhost:8080/departments/' + deptId + '/projects').map(projects => projects.json());
  }

  getEmployeesById(deptId: number) {
    return this.http.get('http://localhost:8080/departments/' + deptId + '/employees').map(employees => employees.json());
  }
}
