import { Component, OnInit } from '@angular/core';
import { MdButton, MdCard, MdSidenav, MdSidenavContainer } from '@angular/material';
import { Client } from '../classes/client'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, FormArray } from '@angular/forms'
import { ClientService } from '../services/client.service';
import { Project } from '../classes/project';
import { ProjectService } from '../services/project.service';
import { Department } from '../classes/department';
import { DepartmentService } from '../services/department.service';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';
declare var jsPDF: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  clients: Client[] = [];
  projects: Project[] = [];
  departments: Department[] = [];
  users: User[] = [];
  employees = [];
  selectValue: number = 0;
  fromDate: String;
  toDate: String;
  showTableFlag: boolean=false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private clientService: ClientService,
    private projectService: ProjectService,
    private departmentService: DepartmentService,
    private userService: UserService) { }

  ngOnInit() {
  }

  changeFromDate(event) {
    console.log(event.target.value);
    this.fromDate = event.target.value;
  }

  changeToDate(event) {
    console.log(event.target.value);
    this.toDate = event.target.value;
  }

  getTableData(val: number) {

    if (val === 1) {
      if (this.fromDate !== undefined && this.toDate !== undefined) {
        this.getEmployeesHiredBetween(this.fromDate, this.toDate);
        this.showTableFlag = true;
      }
      else {
        console.log("Date value undefined");
      }
    }
    else if (val === 2) {
      if (this.fromDate !== undefined && this.toDate !== undefined) {
        this.getEmployeesLeftBetween(this.fromDate, this.toDate);
        this.showTableFlag = true;
      }
      else {
        console.log("Date value undefined");
      }
    } else if (val === 3) {
      if (this.fromDate !== undefined && this.toDate !== undefined) {
        this.getProjectsStartedBetween(this.fromDate, this.toDate);
        this.showTableFlag = true;
      }
      else {
        console.log("Date value undefined");
      }
    } else if (val === 4) {
      if (this.fromDate !== undefined && this.toDate !== undefined) {
        this.getCompletedProjectsBetween(this.fromDate, this.toDate);
        this.showTableFlag = true;
      }
      else {
        console.log("Date value undefined");
      }
    }
  }

  changeReport(option) {
    this.selectValue = option.value;
    this.showTableFlag = false;
    this.employees = [];
    this.projects = [];
    this.clients = [];
    this.fromDate = undefined;
    this.toDate = undefined;
  }

  getProjectsStartedBetween(fromDate: String, toDate: String) {
    this.projectService.getProjectsStartedBetween(fromDate, toDate).subscribe(ele => {
      this.projects = ele.json();
      console.log(this.projects);
    });
  }

  getCompletedProjectsBetween(fromDate: String, toDate: String) {
    this.projectService.getCompletedProjectsBetween(fromDate, toDate).subscribe(ele => {
      this.projects = ele.json();
      console.log(this.projects);
    });
  }

  getEmployeesHiredBetween(fromDate: String, toDate: String) {
    this.userService.getAllEmployeesHiredBetween(fromDate, toDate).subscribe(ele => {
      this.employees = ele.json();
    });
  }

  getEmployeesLeftBetween(fromDate: String, toDate: String) {
    this.userService.getAllEmployeesLeftBetween(fromDate, toDate).subscribe(ele => {
      this.employees = ele.json();
    });
  }

  generateReport(val: number) {
    var doc = new jsPDF();
    doc.text("Report", 14, 16);
    var elem = document.getElementById("myTable");
    var res = doc.autoTableHtmlToJson(elem);
    doc.autoTable(res.columns, res.data, { startY: 20 });
    doc.save('Report.pdf');
  }
 
}
