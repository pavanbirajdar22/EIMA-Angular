import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Permission } from './permission'
@Injectable()
export class EditPermissionByAdminService {

  constructor(private http:Http) { }

  editPermissionByAdmin(permission:Permission){
      return this.http.post("http://localhost:8080/permission/editPermission",permission).map(resp => resp.json())
  }

  
}
