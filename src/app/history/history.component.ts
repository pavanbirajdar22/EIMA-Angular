import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';
import { History } from './history';
import { MdSnackBar } from "@angular/material";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  histories: History[];
  constructor(private service: HistoryService) { }

  ngOnInit() {
    this.service.getHistory().subscribe(ele => {
      //console.log(ele)
      this.histories=ele.histories
      console.log(this.histories)
    })
  }

}

