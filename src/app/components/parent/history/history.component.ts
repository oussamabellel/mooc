import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { history } from 'src/app/model/history';
import { users } from 'src/app/model/users';
import { HttpClient } from '@angular/common/http';
import { ParentService } from 'src/app/service/parent/parent.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements AfterContentInit {

  ngAfterContentInit(): void {

    this.apiparent.getHistory(this.user.id).subscribe((History: history[]) => {
      this.History = History;
    })
  }

  History: history[];
  user: users = JSON.parse(localStorage.getItem('user'));

  constructor(private httpClient: HttpClient, private apiparent: ParentService) { }

}
