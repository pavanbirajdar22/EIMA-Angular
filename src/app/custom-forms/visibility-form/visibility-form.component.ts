import { Component, OnInit } from '@angular/core';
import { MdSlideToggle,MdCard } from '@angular/material'
import { FormBuilder,FormGroup } from '@angular/forms';
import { VisibilityService } from './visibility.service';

@Component({
  selector: 'app-visibility-form',
  templateUrl: './visibility-form.component.html',
  styleUrls: ['./visibility-form.component.css']
})
export class VisibilityFormComponent implements OnInit {
    user:any
    visibility:FormGroup

  constructor(private fb:FormBuilder,private visiblityService:VisibilityService) { }

  ngOnInit() {
    this.user=JSON.parse(sessionStorage.getItem('currentUser'))

    this.visibility=this.fb.group({
      dobVisible:[this.user.dobVisible],
      addressVisible:[this.user.addressVisible],
      genderVisible:[this.user.genderVisible],
      //phoneVisible:[this.user.phoneVisible]
    })
  }

  setVisibility(){
    this.visibility.value.eid=this.user.eid
    this.visibility.value.addressVisible= this.visibility.value.addressVisible ? 1 :0
    this.visibility.value.dobVisible= this.visibility.value.dob ? 1 :0
    this.visibility.value.genderVisible= this.visibility.value.genderVisible ? 1 :0
    //this.visibility.value.phoneVisible= this.visibility.value.phoneVisible ? 1 :0
    console.log(this.visibility.value)
    this.visiblityService.setVisibility(this.user.eid,this.visibility.value).subscribe(ele=>{});
  }

}
