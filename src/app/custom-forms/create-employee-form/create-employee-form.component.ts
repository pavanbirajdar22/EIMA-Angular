import { Component, OnInit } from '@angular/core';
import { CreateEmployeeService } from './create-employee.service';
import { MdSnackBar } from "@angular/material"
import { Validators, FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-employee-form',
  templateUrl: './create-employee-form.component.html',
  styleUrls: ['./create-employee-form.component.css']
})
export class CreateEmployeeFormComponent implements OnInit {

  employeeForm: FormGroup
  clients: any[];
  departments: any[];
  constructor(private fb: FormBuilder, private service: CreateEmployeeService, private snackBar: MdSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000
    });
  }


  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      dob:['',Validators.required],
      gender:[,Validators.required],
      addresses: this.fb.array([
        this.fb.group({
        city: ['', Validators.required],
        country: ['', Validators.required],
        line1: ['', Validators.required],
        line2: [''],
        pincode: ['', Validators.required],
        state: ['', Validators.required]
      })]),
      salary: ['', Validators.required],
      joiningDate: ['', Validators.required],
      leavingDate: [''],
      designation: ['', Validators.required],
      manager: ['',Validators.required],
      phoneNumber: ['', Validators.required],
      department:this.fb.group({
        deptId:['',Validators.required]
      }),
      client:this.fb.group({
       cid:['',Validators.required],
      })
    })

    this.service.getAllClients().subscribe(ele => {
      this.clients = ele._embedded.clients;
      console.log(ele)
    })

    this.service.getAllDepartments().subscribe(ele => {
      this.departments = ele._embedded.departments;
      console.log(ele)
    })

  }

  onSubmit() {

    console.log(this.employeeForm.value)
    this.service.createEmployee(this.employeeForm.value).subscribe(ele => {

      if (ele.status === 201) {
        this.openSnackBar("Employee","Added Successfully")
      }
    });
   }

}
