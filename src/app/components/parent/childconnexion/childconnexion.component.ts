import { Component, OnInit } from '@angular/core';
import { connexion } from 'src/app/model/connexion';
import { users } from 'src/app/model/users';
import { HttpClient } from '@angular/common/http';
import { ParentService } from 'src/app/service/parent/parent.service';

@Component({
  selector: 'app-childconnexion',
  templateUrl: './childconnexion.component.html',
  styleUrls: ['./childconnexion.component.css']
})
export class ChildconnexionComponent implements OnInit {

  Connexions: connexion[];
  user: users = JSON.parse(localStorage.getItem('user'));


  constructor(private httpClient: HttpClient, private apiparent: ParentService) { }

  ngOnInit() {

    this.apiparent.getChildrenLastConnexion(this.user.id).subscribe((Connexions: connexion[]) => {
      this.Connexions = Connexions;
      Connexions.forEach(element => {
        console.log(element.nom, element.date);
      });
    })
  }

}
