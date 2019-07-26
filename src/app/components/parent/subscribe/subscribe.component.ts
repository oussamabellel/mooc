import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParentService } from 'src/app/service/parent/parent.service';
import { niveau } from 'src/app/model/niveau';
import * as $ from "jQuery";
import { users } from 'src/app/model/users';
import { response } from 'src/app/model/response';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {


  user: users = JSON.parse(localStorage.getItem('user'));
  data: response;


  constructor(private httpClient: HttpClient, public apiparent: ParentService) { }
  levels: niveau[];

  ngOnInit() {

    this.apiparent.GetAllLevel(this.user.id).subscribe((levels: niveau[]) => {
      this.levels = levels;
    })

  }

  Subscribe(event) {

    event.preventDefault()
    const target = event.target

    $('input[name="checkbox"]:checked').each(function () {
      var id_niveau = (this as HTMLInputElement).value;
      var user = JSON.parse(localStorage.getItem('user'));

      $.post(`http://127.0.0.1/edsa-api/v1/subscribe.php?id=${user.id}&id_niveau=${id_niveau}`, { id_niveau: id_niveau }).done(function (data: response) {
        this.username_status = JSON.parse(`${data}`);
        if (this.username_status.error) {
          $("#result").empty().append("<i class='fas fa-times'></i>" + this.username_status.message).removeClass().addClass("alert alert-danger");
        } else {
          $("#result").empty().append("<i class='fas fa-check'></i>" + this.username_status.message).removeClass().addClass("alert alert-success");
        }
      });
    });

  }

}
