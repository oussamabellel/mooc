import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { users } from 'src/app/model/users';
import { response } from 'src/app/model/response';
import { FormsModule } from '@angular/forms';
import * as $ from "jQuery";

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})


export class NavbarHomeComponent implements OnInit {

  us_password = "pass";

  username_status: response;
  register_data: response;
  login_data: response;

  user: users;
  error = "";
  message = "";

  data = {
    error: null,
    message: null
  };

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {

    $(document).ready(function () {

      $('#user_password').blur(function () {
        var password = $(this).val();
        if (String(password).length < 6) {
          $("#pass_length").empty().append("Password must be at least 6 characters long.").addClass("alert alert-danger");
        } else {
          $("#pass_length").empty().removeClass();
        }
      })

      $('#user_confirm_password').blur(function () {
        var confirm = $(this).val();
        var password = $('#user_password').val();

        if (!(confirm == password)) {
          $("#pass_confirm").empty().append("Password and Confirmation must bee equal.").addClass("alert alert-danger");
        } else {
          $("#pass_confirm").empty().removeClass();
        }
      })

      $('#user_username').blur(function () {
        var username = $(this).val();
        $.get(`http://127.0.0.1/edsa-api/v1/verify_user.php?username=${username}`, { username: username }).done(function (data: response) {
          this.username_status = JSON.parse(`${data}`);
          if (this.username_status.error) {
            $("#result").empty().append(this.username_status.message).removeClass().addClass("alert alert-danger");
          } else {
            $("#result").empty().append(this.username_status.message).removeClass().addClass("alert alert-success");
          }
        });
      })
    })
  }

  login(event) {

    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    const data_to_send = {
      username: String(username),
      password: String(password)
    }


    this.apiService.userlogin(data_to_send).subscribe((login_data: response) => {

      const string = JSON.stringify(login_data);

      if (login_data.error) {
        localStorage.removeItem('loggedin');
        this.login_data = JSON.parse(string);
      }
      else {
        this.user = JSON.parse(string);
        this.login_data = JSON.parse(string);
        localStorage.setItem('user', JSON.stringify(login_data));
        this.apiService.setLoggedIn(true);

        setTimeout(() => {
          if (this.user.type == "Teacher") {
            this.router.navigate(['teacher']);
          }
          if (this.user.type == "Student") {
            this.router.navigate(['student']);
          }
          if (this.user.type == "Parent") {
            this.router.navigate(['parent']);

          }
        }, 500);
      }
    })
  }

  register(event) {

    event.preventDefault()
    const target = event.target
    const radio = target.querySelector('input[name=optradio]:checked').value
    const username = target.querySelector('#user_username').value
    const password = target.querySelector('#user_password').value
    const email = target.querySelector('#user_email').value
    const nom = target.querySelector('#user_nom').value
    const prenom = target.querySelector('#user_prenom').value
    const age = target.querySelector('#user_age').value

    const data_to_send = {
      username: String(username),
      email: String(email),
      type: String(radio),
      password: String(password),
      nom: String(nom),
      prenom: String(prenom),
      age: parseInt(age)
    }

    this.apiService.userregister(data_to_send).subscribe((register_data: response) => {
      this.register_data = register_data;
    })
  }

}
