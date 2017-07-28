import { Observable } from 'rxjs/Observable';
import { Client } from './../../classes/client';
import { ActivatedRouteSnapshot } from '@angular/router';
import { EditClientService } from './edit-client.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EditClientResolverService {

  cid:any
  constructor(private editClientService:EditClientService) { }
  
  resolve(route: ActivatedRouteSnapshot): Observable<Client> {

    this.cid = +route.params['cid']
    console.log(this.cid)
    return this.editClientService.getClient(this.cid)

  }
}
