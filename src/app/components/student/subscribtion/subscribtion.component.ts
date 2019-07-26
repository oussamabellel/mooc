import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student/student.service';
import { users } from 'src/app/model/users';
import { module } from 'src/app/model/module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribtion',
  templateUrl: './subscribtion.component.html',
  styleUrls: ['./subscribtion.component.css']
})
export class SubscribtionComponent implements OnInit {
  Modules: module[];
  user: users = JSON.parse(localStorage.getItem('user'));

  constructor(private apistudent: StudentService, private router: Router) { }

  ngOnInit() {

    this.apistudent.GetModuleOfSubscribtion(this.user.id).subscribe((modules: module[]) => {
      this.Modules = modules;
    })
  }

  open(id) {
    this.router.navigate(['/mescours', id]);
  }

}
