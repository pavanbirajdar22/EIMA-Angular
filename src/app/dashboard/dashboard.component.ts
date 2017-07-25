import { Component, OnInit } from '@angular/core';
import {MdCard} from '@angular/material'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentEmployee:any;
  gender:["Male","Female"]

  constructor() { }

  ngOnInit() {
    this.currentEmployee=JSON.parse(sessionStorage.getItem("currentEmployee"));
  }

}
