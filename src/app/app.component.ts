import { Component, OnInit, Output } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { UserService } from './services/user.service';
import { AllEmployeesComponent } from './all-employees/all-employees.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  url: string;

  permissions: any
  user:any

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getPermissionsById(1).subscribe(permission => { this.permissions = permission; sessionStorage.setItem("currentUserPermission", JSON.stringify(this.permissions)) });
    this.userService.getUserById(1).subscribe(user => { this.user = user; sessionStorage.setItem("currentUser", JSON.stringify(this.user)) });
  }

}
