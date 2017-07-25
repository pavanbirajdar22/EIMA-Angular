import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';

@Injectable()
export class LoginAuthService implements CanActivate{

  constructor(private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot) {

    if(sessionStorage.getItem('currentUserId')!=null){
         return true;
    }
    else {
      this.router.navigate(["/login"])
      return false;
    }
  }
}
