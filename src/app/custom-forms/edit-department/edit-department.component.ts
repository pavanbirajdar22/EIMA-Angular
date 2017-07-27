import { EditDepartmentService } from './edit-department.service';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  editDepartmentForm: FormGroup
  department: any

  constructor(private fb: FormBuilder, private service: EditDepartmentService,
    private ar: ActivatedRoute, private router: Router, private snackBar: MdSnackBar) {

    this.ar.data.subscribe(data => {
      this.department = data['department']
      console.log("department received is: " + JSON.stringify(this.department))

      this.editDepartmentForm = this.fb.group({
        deptName: [this.department.deptName,Validators.required]
      })
    })
  }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
  onSubmit(){
    this.service.editDepartment(this.editDepartmentForm.value).subscribe(ele =>{
           console.log(ele)
           this.openSnackBar("Department","Edited Successfuly")
    })
  }
}
