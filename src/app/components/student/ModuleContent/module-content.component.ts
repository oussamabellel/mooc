import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cours } from 'src/app/model/cours';
import { users } from 'src/app/model/users';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-module-content',
  templateUrl: './module-content.component.html',
  styleUrls: ['./module-content.component.css']
})
export class ModuleContentComponent implements OnInit {

 id_module:string;
 Cours:cours[];
 user:users = JSON.parse(localStorage.getItem('user'));

  constructor(private route: ActivatedRoute, private router: Router, private apistudent:StudentService) { }

  ngOnInit() {

    this.id_module = this.route.snapshot.paramMap.get('id');
    this.apistudent.getCoursOfModule(this.id_module).subscribe((Cours:cours[]) => {
      this.Cours = Cours;
      Cours.forEach(element => {
        console.log(element);
      });
    })
  }

  open(lien){
    window.open(lien,'_blank');
  }

}
