import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class VisibilityService {

  constructor(private http:Http) { }

  setVisibility(id,visibility){
    console.log(visibility)
    return this.http.put("http://localhost:8080/users/"+id,visibility)
  }
}
