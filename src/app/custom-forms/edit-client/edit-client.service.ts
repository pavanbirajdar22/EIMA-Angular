import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EditClientService {
 
  cid:any
  constructor(private http:Http) { }
  
  getClient(cid:any){
    this.cid=cid
      return this.http.get("http://localhost:8080/clients/"+cid).map(resp => resp.json())
  }

  editClient(client:any){
    return this.http.patch("http://localhost:8080/clients/"+this.cid,client).map(resp => resp.json())
  }

}
