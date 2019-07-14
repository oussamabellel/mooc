import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/service/student/student.service';
import { cours } from 'src/app/model/cours';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Cours: cours[];
  user: users = JSON.parse(localStorage.getItem('user'));

  constructor(private httpClient: HttpClient, private apistudent: StudentService) { }

  ngOnInit() {
    this.apistudent.getLastCours(this.user.id).subscribe((Cours: cours[]) => {
      this.Cours = Cours;
      Cours.forEach(element => {
        console.log(element.id);
      });
    })
  }

}
