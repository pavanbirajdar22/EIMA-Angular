import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';

@Injectable()
export class VisibilityResolverService implements Resolve<User> {

  ar:any
  eid:any

  constructor(private userService:UserService) { }

  resolve(route:ActivatedRouteSnapshot):Observable<User>{
      console.log(route);
      this.eid=+JSON.parse(sessionStorage.getItem('currentUser')).eid;
      return this.userService.getUserByEid(this.eid);
  }

}