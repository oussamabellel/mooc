import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { users } from 'src/app/model/users';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  selecteduser = {
    username: null,
    password: null
  };

  login(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    console.log(username + " " + password);

    // this.apiService.userlogin(username, password).subscribe(data => {
    //    if (data.error){
    //      window.alert(data.message);
    //    } else {
    //     if (data.type == "Teacher"){
    //       this.router.navigate(['teacher']);
    //     }
    //     if (data.type == "Student"){
    //       this.router.navigate(['student']);
    //     }
    //     if (data.type == "Parent"){
    //       this.router.navigate(['parent']);
    //     }
    //    }
    // })
  }

}
