import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { EditProjectService } from './edit-project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  project: any
  clients:any
  departments:any

  editProjectForm: FormGroup
  constructor(private fb: FormBuilder, private service: EditProjectService,
    private ar: ActivatedRoute, private router: Router, private snackBar: MdSnackBar) {

    this.ar.data.subscribe(data => {
      this.project = data['project']
      console.log("project received is: " + JSON.stringify(this.project))

      this.editProjectForm = this.fb.group({
        title: [this.project.title],
        startDate: [this.project.startDate],
        endDate: [this.project.endDate],
        client: this.fb.group({
          cid: [this.project.client.cid],
        }),
        department: this.fb.group({
          deptId: [this.project.department.deptId]
        })
      })
    })
  }

  ngOnInit() {

    this.service.getAllClients().subscribe(ele => {
       this.clients=ele._embedded.clients;
    })

    this.service.getAllDepartments().subscribe(ele => {
      this.departments=ele._embedded.departments;
      console.log(ele)
    })
  }

   onSubmit() {
    this.service.editProject(this.editProjectForm.value).subscribe(ele => {
      console.log('response to edit request:'+ ele)
      this.openSnackBar("Project","Edited Successfully")
    })
  
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
