import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { users } from 'src/app/model/users';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  user:any;
  error = "";
  message = "";


    data = {
    error: null,
     message: null
   };
  
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  login(event){
    
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    console.log(username +" "+ password);

    this.apiService.userlogin(username, password).subscribe(data => {
       if (data.error){
         localStorage.removeItem('loggedin');
         this.error = String(data.error);
         this.message = data.message;
       } else {
        localStorage.setItem('user', JSON.stringify(data));
      
        this.user = data;
        this.error = String(data.error);
        this.message = "Authentification sucesss";
        this.apiService.setLoggedIn(true);
        
      setTimeout(() => {
        if (data.type == "Teacher"){
          this.router.navigate(['teacher']);
        }
        if (data.type == "Student"){
          this.router.navigate(['student']);
        }
        if (data.type == "Parent"){
          this.router.navigate(['parent']);

        }
      }, 500);
        
       }
    })
  }

  register(event){
  
    event.preventDefault()
    const target = event.target
    const radio = target.querySelector('input[name=optradio]:checked').value
    const username = target.querySelector('#user_username').value
    const password = target.querySelector('#user_password').value
    const email = target.querySelector('#user_email').value
    const nom = target.querySelector('#user_nom').value
    const prenom = target.querySelector('#user_prenom').value
    const age = target.querySelector('#user_age').value

    this.apiService.userregister(username, password, email, nom, prenom, age, radio).subscribe(data => {
      this.message = data.message;
      this.data.error = String(data.error);
    })


    
    
  }

}
