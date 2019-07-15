import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users';
import { response } from 'src/app/model/response';

@Component({
  selector: 'app-addcredits',
  templateUrl: './addcredits.component.html',
  styleUrls: ['./addcredits.component.css']
})
export class AddcreditsComponent implements OnInit {

  user: users = JSON.parse(localStorage.getItem('user'));
  data: response;

  constructor() { }

  ngOnInit() {
  }

}
