import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../classes/user';
@Injectable()
export class LoginService {

  constructor(private http: Http) { }
  user: User;
  eid:number;
  getUser(user:User) {
    return this.http.post("http://localhost:8080/user/login",user).map(resp => resp.json())
  }

}
