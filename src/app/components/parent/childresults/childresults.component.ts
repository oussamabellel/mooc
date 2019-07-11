import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParentService } from 'src/app/service/parent/parent.service';
import { users } from 'src/app/model/users';

@Component({
  selector: 'app-childresults',
  templateUrl: './childresults.component.html',
  styleUrls: ['./childresults.component.css']
})
export class ChildresultsComponent implements OnInit {

  Childrens: users[];
  user: users = JSON.parse(localStorage.getItem('user'));


  constructor(private httpClient: HttpClient, private apiparent: ParentService) { }

  ngOnInit() {
    this.apiparent.getAllChildrens(this.user.id).subscribe((Childrens: users[]) => {
      this.Childrens = Childrens;
      Childrens.forEach(element => {
        console.log(element.prenom);
      });
    })
  }

}
