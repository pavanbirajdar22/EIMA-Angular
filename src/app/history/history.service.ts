import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class HistoryService {

  constructor(private http:Http) { }
  eid:any
  getHistory(){
    this.eid=JSON.parse(sessionStorage.getItem('currentUser')).eid
    return this.http.get("http://localhost:8080/employees/"+this.eid).map(resp => resp.json())
  }
}
