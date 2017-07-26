import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CreateClientService } from './create-client.service';
import { MdSnackBar } from "@angular/material";

@Component({
  selector: 'app-create-client-form',
  templateUrl: './create-client-form.component.html',
  styleUrls: ['./create-client-form.component.css']
})
export class CreateClientFormComponent implements OnInit {

  clientForm:FormGroup
  created:boolean
  constructor(private fb:FormBuilder, private service:CreateClientService,private snackBar: MdSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
   
  ngOnInit() {
    this.clientForm=this.fb.group({
      name:['',Validators.required],
      location:['',Validators.required]
    })
  }

  onSubmit(){
    
    this.service.createClient(this.clientForm.value).subscribe(ele => {
    
      if(ele.status===201){
      this.openSnackBar("Added Successfully","")
    }
    });
     
  }
}
