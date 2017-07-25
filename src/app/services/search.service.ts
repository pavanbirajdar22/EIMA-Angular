import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  search(url: string) {
    return (this.http.get(url).map((res: Response) => {
      if (res) {
        if (res.status === 201) {
          return res.json()
        }
        else if (res.status === 200) {
          return res.json()
        }
      }
    }));
  }

}
