import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { cours } from 'src/app/model/cours';
import { StudentService } from '../../../service/student/student.service'
import { module } from 'src/app/model/module';
import { response } from 'src/app/model/response';


@Component({
  selector: 'app-buycours',
  templateUrl: './buycours.component.html',
  styleUrls: ['./buycours.component.css']
})
export class BuycoursComponent implements OnInit {

  modules: module[];
  data: response;
  Cours: cours[];
  user: users = JSON.parse(localStorage.getItem('user'));

  constructor(private httpClient: HttpClient, private apistudent: StudentService) { }

  ngOnInit() {
    this.apistudent.getModuleToBuy(this.user.id).subscribe((modules: module[]) => {
      this.modules = modules;
    })
  }

  Buy(module) {
    this.apistudent.BuyModule(this.user.id, module).subscribe((data: response) => {
      this.data = data;
      // if (!data.error) {
      //   setTimeout(() => {
      //     window.location.reload();
      //   }, 1000);
      // }
    })
  }

}
