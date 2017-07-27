import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

  currentUserId: number;
  currentUser: any;
  permission: any;
  employee: any;

  constructor(private http: Http) { }

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

  getPermissionsById(eid: number) {
    return this.http.get('http://localhost:8080/users/' + eid + '/permission').map(user => user.json());
  }

  getManagerById(eid:number){
    return this.http.get('http://localhost:8080/employees/' + eid + '/manager').map(user => user.json());
  }

  getAllEmployeesHiredBetween(fromDate: String, toDate: String) {
    const apiUrl = 'http://localhost:8080/employee/hired?fromDate=' + fromDate + '&toDate=' + toDate;
    return this.http.get(apiUrl);
  }

  getAllEmployeesLeftBetween(fromDate: String, toDate: String) {
    const apiUrl = 'http://localhost:8080/employee/left?fromDate=' + fromDate + '&toDate=' + toDate;
    return this.http.get(apiUrl);
  }

  updateLastLogin(){
    let user=JSON.parse(sessionStorage.getItem('currentUser'))
    user.lastLogin=new Date()
    return this.http.patch('http://localhost:8080/users/'+user.eid,user)
  }

}
