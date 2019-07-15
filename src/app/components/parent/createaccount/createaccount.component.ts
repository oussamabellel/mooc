import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParentService } from 'src/app/service/parent/parent.service';
import { users } from 'src/app/model/users';
import { response } from 'src/app/model/response';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  user: users = JSON.parse(localStorage.getItem('user'));
  data: response;

  constructor(private httpClient: HttpClient, private apiparent: ParentService) { }

  ngOnInit() {
  }

  Create(event) {

    event.preventDefault()
    const target = event.target

    const nom = target.querySelector('#nom').value
    const prenom = target.querySelector('#prenom').value
    const age = target.querySelector('#age').value
    const password = target.querySelector('#password').value
    const username = target.querySelector('#username').value
    const email = target.querySelector('#email').value

    const children = new users(null, username, password, email, nom, prenom, age, "Student", this.user.credits);

    this.apiparent.CreateChildrenAccount(children, this.user.id, this.user.credits).subscribe((data: response) => {
      this.data = data;
    })

  }

}
