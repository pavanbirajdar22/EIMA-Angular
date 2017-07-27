import { EditProjectService } from './edit-project.service';
import { Project } from './../../classes/project';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class EditProjectResolverService {

  pid:any
  constructor(private editProjectService:EditProjectService) { }
  
  resolve(route:ActivatedRouteSnapshot):Observable<Project>{
   
      this.pid=+route.params['pid']
      return this.editProjectService.getProject(this.pid)
    

  
    // return this.editEmployeeService.getPermissions();
  }
}
