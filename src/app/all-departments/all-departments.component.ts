import { Component, OnInit } from '@angular/core';
import { MdButton, MdCard, MdSidenav, MdSidenavContainer } from '@angular/material';
import { Router } from '@angular/router'
import { Department } from '../classes/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-all-departments',
  templateUrl: './all-departments.component.html',
  styleUrls: ['./all-departments.component.css']
})
export class AllDepartmentsComponent implements OnInit {

  departments: Department[] = [];
  totalDepartmentCount = 0
  permissions: any
  showButton = ['My Department', 'All Departments']
  toggleFlag = 0
  userId: number
  myDepartment: any

  constructor(private router: Router, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.permissions = JSON.parse(sessionStorage.getItem("currentUser")).permission;

    this.userId = this.permissions.eid

    this.departmentService.getAllDepartments(0).subscribe(ele => {
      this.totalDepartmentCount = ele.json().page.totalElements
      this.departments = ele.json()._embedded.departments;
    });

    this.departmentService.getMyDepartment(this.userId).subscribe(dept => {
      this.myDepartment = dept.json()
      this.totalDepartmentCount = 1
    });
  }

  onPageChange(event) {
    if (this.toggleFlag === 0) {
      this.departmentService.getAllDepartments(event.pageIndex).subscribe(department => this.departments = department.json()._embedded.departments);
    }
    else {
      this.departments = [this.myDepartment]
    }
  }

  showMyDepartment() {
    if (this.toggleFlag === 0) {
      this.toggleFlag = 1
      this.departments = [this.myDepartment]
    }
    else {
      this.toggleFlag = 0
      this.departmentService.getAllDepartments(0).subscribe(ele => {
        this.totalDepartmentCount = ele.json().page.totalElements
        this.departments = ele.json()._embedded.departments;
      });
    }
  }

}





