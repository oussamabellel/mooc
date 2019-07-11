import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { module } from 'src/app/model/module';
import { users } from 'src/app/model/users';
import { StudentService} from '../../../service/student/student.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-mescours',
  templateUrl: './mescours.component.html',
  styleUrls: ['./mescours.component.css']
})
export class MescoursComponent implements OnInit {

  Modules:module[];
  user:users = JSON.parse(localStorage.getItem('user'));
  
  constructor(private httpClient: HttpClient, private apistudent:StudentService, private router: Router) { }

  ngOnInit() {

    this.apistudent.getMyModule(this.user.id).subscribe((Modules:module[]) => {
      this.Modules = Modules;
      Modules.forEach(element => {
        console.log(element);
      });
    })
  }

  open(id)
  {
    console.log(id);
    this.router.navigate(['/mescours', id]);
  }

}
