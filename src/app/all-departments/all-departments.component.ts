import {Component, OnInit} from '@angular/core';
import {MdButton, MdCard, MdSidenav, MdSidenavContainer} from '@angular/material';
import {Router} from '@angular/router'
import {Department} from '../classes/department';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'app-all-departments',
  templateUrl: './all-departments.component.html',
  styleUrls: ['./all-departments.component.css']
})
export class AllDepartmentsComponent implements OnInit {

  departments: Department[] = [];
  totalDepartmentCount = 0

  constructor(private router: Router, private departmentService: DepartmentService) {

  }

  ngOnInit() {
    this.departmentService.getAllDepartments(0).subscribe(ele => {
      this.totalDepartmentCount = ele.json().page.totalElements
      this.departments = ele.json()._embedded.departments;
    });
  }

  onPageChange(event) {
    this.departmentService.getAllDepartments(event.pageIndex).subscribe(department => this.departments = department.json()._embedded.departments);
  }

}





