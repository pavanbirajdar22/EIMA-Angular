import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  containerHeading:string

  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.ar)
  }

}
