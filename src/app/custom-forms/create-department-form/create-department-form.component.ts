import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CreateDepartmentService } from './create-department.service';
import { MdSnackBar } from "@angular/material"

@Component({
  selector: 'app-create-department-form',
  templateUrl: './create-department-form.component.html',
  styleUrls: ['./create-department-form.component.css']
})
export class CreateDepartmentFormComponent implements OnInit {

  departmentForm: FormGroup;
  constructor(private fb: FormBuilder, private service: CreateDepartmentService,private snackBar: MdSnackBar) { }

  ngOnInit() {
    this.departmentForm = this.fb.group({
      deptName: ['', Validators.required]
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit() {

    this.service.createDepartment(this.departmentForm.value).subscribe(ele => {

      if (ele.status === 201) {
        this.openSnackBar("      Added Successfully", "")
      }
    });

  }
}
