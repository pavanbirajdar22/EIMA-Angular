import {Component, OnInit} from '@angular/core';
import {MdButton, MdCard, MdSidenav, MdSidenavContainer} from '@angular/material';
import {Client} from '../classes/client'
import {Router} from '@angular/router'
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.css']
})
export class AllClientsComponent implements OnInit {

  clients: Client[] = [];
  totalClientCount = 0
  permissions:any

  constructor(private router: Router, private clientService: ClientService) {

  }

  ngOnInit() {
    this.permissions=JSON.parse(sessionStorage.getItem("currentUserPermission"));
    this.clientService.getAllClients(0).subscribe(ele => {
      this.totalClientCount = ele.json().page.totalElements
      this.clients = ele.json()._embedded.clients;
    });
  }

  onPageChange(event) {
    this.clientService.getAllClients(event.pageIndex).subscribe(client => this.clients = client.json()._embedded.clients);
  }

}
