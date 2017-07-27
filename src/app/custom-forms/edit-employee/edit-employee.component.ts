import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EditEmployeeService } from './edit-employee.service';
import { MdSnackBar } from "@angular/material"
import { Employee } from '../create-employee-form/employee';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  editEmployeeForm: FormGroup
  employee: any
  clients: any
  departments: any

  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    private service: EditEmployeeService, private snackBar: MdSnackBar) {

    this.route.data.subscribe(data => {
      this.employee = data['employee']
      console.log("employee received: " + JSON.stringify(this.employee))

      this.editEmployeeForm = this.fb.group({
        firstName: [this.employee.firstName],
        middleName: [this.employee.middleName],
        lastName: [this.employee.lastName],
        dob: [this.employee.dob],
        address: this.fb.group({
          city: [this.employee.addresses[0].city],
          country: [this.employee.addresses[0].country],
          line1: [this.employee.addresses[0].line1],
          line2: [this.employee.addresses[0].line2],
          pincode: [this.employee.addresses[0].pincode],
          state: [this.employee.addresses[0].line2]
        }),
        salary: [this.employee.salary],
        joiningDate: [new Date("2017-07-26T14:28:41.000+0000")],
        leavingDate: [this.employee.leavingDate],
        designation: [this.employee.designation],
        manager: [this.employee.manager],
        phoneNumber: [this.employee.phoneNumber],
        department: this.fb.group({
          deptId: ['']
        }),
        client: this.fb.group({
          cid: [''],
        })
      })
    })

  }
  ngOnInit() {
    this.service.getAllClients().subscribe(ele => {
      this.clients = ele._embedded.clients;
    })

    this.service.getAllDepartments().subscribe(ele => {
      this.departments = ele._embedded.departments;
      console.log(ele)
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit() {
    this.editEmployeeForm.value.gender=this.employee.gender
    console.log(this.editEmployeeForm.value)
    this.service.editEmployee(this.editEmployeeForm.value).subscribe(ele => {
      console.log(ele)
      //if (ele instanceof Employee) {
        this.openSnackBar("Employee", "Edited Successfully")
      //}
    })
  }
}


