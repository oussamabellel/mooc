import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { cours } from 'src/app/model/cours';
import { StudentService} from '../../../service/student/student.service'
import { module } from 'src/app/model/module';


@Component({
  selector: 'app-buycours',
  templateUrl: './buycours.component.html',
  styleUrls: ['./buycours.component.css']
})
export class BuycoursComponent implements OnInit {

  modules:module[];
  Cours:cours[];
  user:users = JSON.parse(localStorage.getItem('user'));

  constructor(private httpClient: HttpClient, private apistudent:StudentService) { }

  ngOnInit() {

   this.apistudent.getModuleToBuy(this.user.id).subscribe((modules:module[]) => {
    this.modules = modules;
    modules.forEach(element => {
      console.log(element.id);
    });
  })
  
  }

  open(link)
  {
    window.open(link, '_blank');
    console.log(link)
   
  }

}
