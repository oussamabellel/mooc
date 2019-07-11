import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:users = JSON.parse(localStorage.getItem('user'));
  
  constructor() { }

  ngOnInit() {
  }

}
