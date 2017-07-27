import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class VisibilityService {

  constructor(private http:Http) { }

  setVisibility(visibility){
    return this.http.patch("http://localhost:8080/users/"+visibility.eid,visibility)
  }
}
