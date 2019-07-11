import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  user: users = JSON.parse(localStorage.getItem('user'));
  constructor() { }

  ngOnInit() {
    console.log(this.user.nom);
  }

}
