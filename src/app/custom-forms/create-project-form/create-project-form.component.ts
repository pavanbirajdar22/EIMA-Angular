import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MdSnackBar,MdCard,MdCardHeader } from "@angular/material";
import { CreateProjectService } from './create-project.service';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.css']
})
export class CreateProjectFormComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:CreateProjectService,private snackBar: MdSnackBar) { }
  projectForm:FormGroup;
  clients:any[];
  departments:any[];

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.projectForm=this.fb.group({
      title:['',Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required], 
      client:this.fb.group({
       cid:['',Validators.required],
      }),
      department:this.fb.group({
        deptId:['',Validators.required]
      })
    })

    this.service.getAllClients().subscribe(ele => {
      this.clients=ele._embedded.clients;
      console.log(ele)
    })

    this.service.getAllDepartments().subscribe(ele => {
      this.departments=ele._embedded.departments;
      console.log(ele)
    })
  }

  onSubmit(){
    console.log(this.projectForm.get("department"))
    this.service.createProject(this.projectForm.value).subscribe(ele => {
      if(ele.status===201){
      this.openSnackBar("Added Successfully","Project")
    }
    });
  }
}
