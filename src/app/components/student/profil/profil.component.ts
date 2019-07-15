import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users';
import { StudentService } from 'src/app/service/student/student.service';
import { ApiService } from 'src/app/api.service';
import { response } from 'src/app/model/response';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: users = JSON.parse(localStorage.getItem('user'));
  data: response;
  constructor(private apiStudent: StudentService, private apiService: ApiService) { }

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


    const editedUser = new users(this.user.id, null, password, null, nom, prenom, parseInt(age), null, null);

    console.log(editedUser);

    this.apiService.ModifiyProfil(editedUser).subscribe((data: response) => {
      this.data = data;
      if (!data.error) {
        this.apiService.userlogin(this.user.username, password).subscribe((data2: response) => {
          localStorage.setItem('user', JSON.stringify(data2));
        })
      }
    })

  }

}
