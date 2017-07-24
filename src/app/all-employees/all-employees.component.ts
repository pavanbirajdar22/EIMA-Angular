import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service'
import {MdCard, MdButton, MdPaginator, PageEvent} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  employees: any;
  totalEmployeeCount = 0;
  permissions:any;

  constructor(private employeeService: UserService, private router: Router) {}

  ngOnInit() {
    this.permissions=JSON.parse(sessionStorage.getItem("currentUserPermission"));
    this.employeeService.getAllEmployees(0).subscribe(ele => {
      this.totalEmployeeCount = ele.json().page.totalElements
      // console.log(this.totalEmployeeCount);
      this.employees = ele.json()._embedded.employees
      for (const employee of this.employees) {
        this.employeeService.getDepartmentById(employee.eid).subscribe(item => {
          employee.departmentName = item.deptName
        })
      }
    });
  }

  onPageChange(event) {
    this.employeeService.getAllEmployees(event.pageIndex).subscribe(employee => this.employees = employee.json()._embedded.employees);
  }


}
