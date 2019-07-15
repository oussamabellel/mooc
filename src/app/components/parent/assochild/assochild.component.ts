import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users';
import { HttpClient } from '@angular/common/http';
import { ParentService } from 'src/app/service/parent/parent.service';
import { response } from 'src/app/model/response';

@Component({
  selector: 'app-assochild',
  templateUrl: './assochild.component.html',
  styleUrls: ['./assochild.component.css']
})
export class AssochildComponent implements OnInit {

  user: users = JSON.parse(localStorage.getItem('user'));
  data: response;
  constructor(private httpClient: HttpClient, private apiparent: ParentService) { }

  ngOnInit() {
  }

  Associate(event) {

    event.preventDefault()
    const target = event.target
    const id = target.querySelector('#id').value
    const data = {
      id_enfant: parseInt(id),
      id_parent: this.user.id
    }

    this.apiparent.Associate(data).subscribe((data: response) => {
      this.data = data;
    })

  }

}
