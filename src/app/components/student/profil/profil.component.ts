import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: users = JSON.parse(localStorage.getItem('user'));

  constructor(private apiStudent: StudentService) { }

  ngOnInit() {


  }

  EditProfil(event) {

    console.log("yes");
    event.preventDefault()
    const target = event.target

    const nom = target.querySelector('#nom').value
    const prenom = target.querySelector('#prenom').value
    const age = target.querySelector('#age').value
    const password = target.querySelector('#password').value

  }

}
