import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdCard } from '@angular/material';
import { LoginService } from '../services/login.service';
import { User } from '../classes/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;
  message: string;
  loginFlag: boolean = false;

  constructor(private fb: FormBuilder, private service: LoginService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.service.getUser(this.loginForm.value).subscribe(resp => {
      //console.log(resp);
      if (resp.user === null) {
        this.message = resp.message
        this.loginFlag = true;
      }
      else {
        this.user = resp.user;
        this.service.eid = resp.user.eid;
        sessionStorage.setItem('currentUserId', resp.user.eid);
        sessionStorage.setItem('currentUser',JSON.stringify(resp.user)); 
        this.router.navigate(['/dashboard'])
      }
    })
  }

}
