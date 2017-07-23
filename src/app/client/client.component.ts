import { Component, OnInit } from '@angular/core';

import { ClientService } from '../services/client.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import { Project } from '../classes/project';
import { Client } from '../classes/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  cid: number = null;
  client: Client;
  projects: Project[] = new Array();
  employees: any = new Array();

  constructor(private clientService: ClientService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.cid = +params['cid'];
      this.clientService.getClientById(this.cid).subscribe(client => this.client = client);
      this.clientService.getProjectsByCid(this.cid).subscribe(projects => this.projects = projects._embedded.projects);
      this.clientService.getEmployeesByCid(this.cid).subscribe(employees => this.employees = employees._embedded.employees);
    });

  }

}
