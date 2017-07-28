import { Component, OnInit } from '@angular/core';
import { MdSlideToggle,MdCard,MdRadioButton, MdRadioGroup,MdButton,MdSnackBar } from '@angular/material'
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visibility-form',
  templateUrl: './visibility-form.component.html',
  styleUrls: ['./visibility-form.component.css']
})
export class VisibilityFormComponent implements OnInit {
  visibilityForm: FormGroup;
  eid: any;
  user: any;

  constructor(private router: Router,
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private userService: UserService,
    private snackBar:MdSnackBar) {

    this.ar.data.subscribe(data => {
      this.user = data['user'];
      //console.log(this.user);
      // this.visibility.addressVisible = this.user.addressVisible;
      // this.visibility.phoneVisible = this.user.phoneVisible;
      // this.visibility.genderVisible = this.user.genderVisible;
      // this.visibility.dobVisible = this.user.dobVisible;

      console.log("User received: " + JSON.stringify(this.user));

      this.eid = this.user.eid;

      this.visibilityForm = this.fb.group({
        addressVisible: [this.user.addressVisible],
        phoneVisible: [this.user.phoneVisible],
        genderVisible: [this.user.genderVisible],
        dobVisible: [this.user.dobVisible]
      })

    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.user = this.visibilityForm.value;
    this.user.eid = this.eid;
    console.log(this.user)

    let cuser = JSON.parse(sessionStorage.getItem('currentUser'));

    cuser.addressVisible = this.user.addressVisible;
    cuser.phoneVisible = this.user.phoneVisible;
    cuser.genderVisible = this.user.genderVisible;
    cuser.dobVisible = this.user.dobVisible;

    sessionStorage.setItem('currentUser', JSON.stringify(cuser))

    this.userService.editVisibilityByEid(this.user).subscribe(ele => {
      console.log(ele)
      if (ele) {
        this.openSnackBar("Visibility updated sucessfully", " ")
        this.router.navigate(['/dashboard'])
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
