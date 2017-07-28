import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot} from '@angular/router';
import { Employee } from '../create-employee-form/employee';
import { EditPermissionByAdminService } from './edit-permission-by-admin.service';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';
import { Permission } from './permission';

@Injectable()
export class PermissionResolverService implements Resolve<Permission> {

  ar:any
  eid:any

  constructor(private editEmployeeService:EditPermissionByAdminService,private userService:UserService) { }
  
 
  
  resolve(route:ActivatedRouteSnapshot):Observable<Permission>{
      console.log(route)
     
      this.eid=+route.params['eid']
      return this.userService.getPermissionsById(this.eid)
    // return this.editEmployeeService.getPermissions();
  }

    
    

  



}


