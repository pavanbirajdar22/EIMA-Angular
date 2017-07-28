import { EditClientService } from './edit-client.service';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client: any
  editClientForm: FormGroup
  constructor(private fb: FormBuilder, private service: EditClientService,
    private ar: ActivatedRoute, private router: Router, private snackBar: MdSnackBar) {

    this.ar.data.subscribe(data => {
      this.client = data['client']
      console.log("client received is: " + JSON.stringify(this.client))

      this.editClientForm = this.fb.group({
        name: [this.client.name],
        location: [this.client.location]
      })
    })
  }


  ngOnInit() {
  }

  onSubmit(){
    this.service.editClient(this.editClientForm.value).subscribe(ele =>{
        console.log(ele)
        this.openSnackBar("Client","Edited Successfully")
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000
    });
  }
}
