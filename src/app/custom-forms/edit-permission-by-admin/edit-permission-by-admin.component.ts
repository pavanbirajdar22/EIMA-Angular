import { Component, OnInit } from '@angular/core';
import { MdRadioGroup, MdRadioButton,MdSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { EditPermissionByAdminService } from './edit-permission-by-admin.service';
import { Permission } from './permission';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-edit-permission-by-admin',
  templateUrl: './edit-permission-by-admin.component.html',
  styleUrls: ['./edit-permission-by-admin.component.css']
})
export class EditPermissionByAdminComponent implements OnInit {

  permissionsForm: FormGroup;
  eid: any;
  permission: Permission;

  constructor(private fb: FormBuilder, private service: EditPermissionByAdminService, private ar: ActivatedRoute, private userService: UserService,private router:Router,private snackBar:MdSnackBar) {

    this.ar.data.subscribe(data => {
      this.permission = data['permission']
      console.log("employee received: " + JSON.stringify(this.permission))
      this.eid=this.permission.eid


      this.permissionsForm = this.fb.group({
        addEmployee: [this.permission.addEmployee],
        addProject: [this.permission.addProject],
        addClient: [this.permission.addClient],
        addDepartment: [this.permission.addDepartment],
        editEmployee: [this.permission.editEmployee],
        editOtherEmployee: [this.permission.editOtherEmployee],
        deleteUser: [this.permission.deleteUser],
        editProject: [this.permission.editProject],
        editClient: [this.permission.editClient],
        editDepartment: [this.permission.editDepartment],
        generateReport: [this.permission.generateReport]
      })

    })
  }

  ngOnInit() {

  }

  onSubmit() {
    this.permission = this.permissionsForm.value
    this.permission.eid=this.eid
    console.log(this.permission)
    let user =JSON.parse(sessionStorage.getItem('currentUser'))
    user.permission=this.permission
    //sessionStorage.clear()
    sessionStorage.setItem('currentUser',JSON.stringify(user)) 
    this.service.editPermissionByAdmin(this.permission).subscribe(ele => {
      console.log(ele)
      if(ele){
        this.openSnackBar("Permissions edited sucessfully", " ")
        this.router.navigate(['/dashboard'])
      }
    })
  }

    openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
