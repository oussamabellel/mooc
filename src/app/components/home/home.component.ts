import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('loggedint')){
      this.router.navigate(['student']);
    }
  }



}
