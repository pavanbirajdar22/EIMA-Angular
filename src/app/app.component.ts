import { Component, OnInit, Output } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { UserService } from './services/user.service';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { FormBuilder, FormGroup } from '@angular/forms'
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  url: string;

  tables = ["Employee", "Project", "Department", "Client"]
  fields = [["ID", "First Name", "Last Name"], ["Title"], ["Department Name"], ["Client Name"]]

  queryTables = ["employees", "projects", "departments", "clients"]
  queryFields = [["Eid", "FirstName", "LastName"], ["Title"], ["DeptName"], ["Name"]]

  permissions: any
  user: any
  ind = 0

  searchFilter: FormGroup
  searchBar: FormGroup

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder, private searchService: SearchService) { }

  ngOnInit() {
    this.userService.getPermissionsById(1).subscribe(permission => { 
      this.permissions = permission; 
      sessionStorage.setItem("currentUserPermission",JSON.stringify(this.permissions))
    });

    this.userService.getUserById(1).subscribe(user => {
      this.user = user; 
      sessionStorage.setItem("currentUser", JSON.stringify(this.user))
    });

    this.userService.getEmployeeById(1).subscribe(employee => { 
      sessionStorage.setItem("currentEmployee", 
      JSON.stringify(employee)) 
    });

    sessionStorage.setItem("currentUserId",'3');

    this.searchFilter = this.fb.group({
      searchFor: [0],
      searchBy: [0]
    })

    this.searchBar = this.fb.group({
      bar: ['']
    })
  }

  onSearchChange(event) {
    this.ind = event.value
  }

  fetchResults() {
    let barValue = this.searchBar.controls.bar.value
    console.log(barValue)
    if (barValue) {
      let table = this.queryTables[this.ind];
      let field = this.queryFields[this.ind][this.searchFilter.controls.searchBy.value]
      let param = field.substr(0, 1).toLowerCase() + field.substr(1)
      if (param !== 'eid')
        field = field + 'Contains'
      this.searchService.search('http://localhost:8080/' + table + '/search/findBy' + field + '?' + param + '=' + barValue).subscribe(ele => {
        let url1 = ele._links.self.href.split('/')[3]
        url1 = url1.substr(0, url1.length - 1)
        let url2 = ele._links.self.href.split('/')[4]
        this.router.navigate(['search/' + url1 + '/' + url2]);
      }, err => {
        this.router.navigate(['/search/not-found']);
      });
    }
  }

}
