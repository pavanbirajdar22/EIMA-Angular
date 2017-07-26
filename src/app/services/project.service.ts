import {Injectable} from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ProjectService {

  constructor(private http: Http) {}

  getAllProjects(pageNo: number) {
    const apiUrl = 'http://localhost:8080/projects?page=' + pageNo + '&size=4&sort=name'
    return this.http.get(apiUrl);
  }

  getMyProjects(eid:number) {
    const apiUrl = 'http://localhost:8080/employees/'+eid+'/projects';
    return this.http.get(apiUrl);
  }

  getProjectByPid(pid: number) {
    return this.http.get('http://localhost:8080/projects/' + pid).map(project => project.json());
  }

  getClientByPid(pid: number) {
    return this.http.get('http://localhost:8080/projects/' + pid).map(project => project.json().client);
  }

  getTeamByPid(pid: number) {
    return this.http.get('http://localhost:8080/projects/' + pid + '/team').map(team => team.json());
  }

  getDepartmentByPid(pid: number) {
    return this.http.get('http://localhost:8080/projects/' + pid).map(project => project.json().department);
  }
}
