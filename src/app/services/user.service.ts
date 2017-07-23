import {Injectable} from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  getAllEmployees(pageNo: number) {
    const apiUrl = 'http://localhost:8080/employees?page=' + pageNo + '&size=4&sort=firstName'
    return this.http.get(apiUrl);
  }

  getEmployeeById(eid: number) {
    return this.http.get('http://localhost:8080/employees/' + eid).map(user => user.json());
  }

  getUserById(eid: number) {
    return this.http.get('http://localhost:8080/employees/' + eid + '/user').map(user => user.json());
  }

  getDepartmentById(eid: number) {
    return this.http.get('http://localhost:8080/employees/' + eid + '/department').map(user => user.json());
  }

  getProjectsById(eid: number) {
    return this.http.get('http://localhost:8080/employees/' + eid + '/projects').map(user => user.json());
  }

  getClientsById(eid: number) {
    return this.http.get('http://localhost:8080/employees/' + eid + '/clients').map(user => user.json());
  }

}
