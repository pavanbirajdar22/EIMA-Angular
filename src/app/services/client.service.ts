import {Injectable} from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ClientService {
  constructor(private http: Http) {}

  getAllClients(pageNo: number) {
    const apiUrl = 'http://localhost:8080/clients?page=' + pageNo + '&size=4sort=name'
    return this.http.get(apiUrl);
  }

  getClientById(cid: number) {
    return this.http.get('http://localhost:8080/clients/' + cid).map(client => client.json());
  }

  getProjectsByCid(cid: number) {
    return this.http.get('http://localhost:8080/clients/' + cid + '/projects').map(client => client.json());
  }

  getEmployeesByCid(cid: number) {
    return this.http.get('http://localhost:8080/clients/' + cid + '/employees').map(client => client.json());
  }
}
