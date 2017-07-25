import { Component, OnInit } from '@angular/core';
import { MdButton, MdCard, MdSidenav, MdSidenavContainer } from '@angular/material';
import { Client } from '../classes/client';
import { Router } from '@angular/router'
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.css']
})
export class AllClientsComponent implements OnInit {

  clients: Client[] = [];
  totalClientCount = 0
  permissions: any
  showButton= ['My Clients','All Clients']
  toggleFlag=0
  userId: number
  myClients = []

  constructor(private router: Router, private clientService: ClientService) {

  }

  ngOnInit() {
    this.permissions = JSON.parse(sessionStorage.getItem("currentUserPermission"));
    this.clientService.getAllClients(0).subscribe(ele => {
      this.totalClientCount = ele.json().page.totalElements
      this.clients = ele.json()._embedded.clients;
    });

    this.userId = +sessionStorage.getItem("currentUserId");

    this.clientService.getMyClients(this.userId).subscribe(client => {
      this.myClients = client.json()._embedded.clients
      this.totalClientCount = this.myClients.length
    });
  }

  onPageChange(event) {
    if (this.toggleFlag===0) {
      this.clientService.getAllClients(event.pageIndex).subscribe(client => this.clients = client.json()._embedded.clients);
    }
    else {
      let start=4*event.pageIndex
      let end=start+4
      console.log(start,end)
      this.clients=this.myClients.slice(start,end)
    }
  }

  showMyClients() {
    if (this.toggleFlag===0) {
      this.toggleFlag=1
      this.clients=this.myClients.slice(0,4)
    }
    else {
      this.toggleFlag=0
      this.clientService.getAllClients(0).subscribe(ele => {
        this.totalClientCount = ele.json().page.totalElements
        this.clients = ele.json()._embedded.clients;
      });
    }
  }

}
