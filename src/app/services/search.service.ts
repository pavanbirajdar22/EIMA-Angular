import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

  constructor(private http:Http) { }

  search(url:string){
    return this.http.get(url).map(ele=>ele=ele.json());
  }

}
