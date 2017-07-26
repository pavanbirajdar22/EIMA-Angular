import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Client } from './client';
@Injectable()
export class CreateClientService {

  constructor(private http:Http) {
   }

   createClient(client:Client){
     return this.http.post("http://localhost:8080/clients",client);
   }

}
