import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student/student.service';
import { cours } from 'src/app/model/cours';
import { users } from 'src/app/model/users';
import { response } from 'src/app/model/response';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  id_module: string;
  Cours: cours[];
  user: users = JSON.parse(localStorage.getItem('user'));


  constructor(private route: ActivatedRoute, private router: Router, private apistudent: StudentService) { }

  ngOnInit() {
    this.id_module = this.route.snapshot.paramMap.get('id');
    this.apistudent.getCoursOfModule(this.id_module).subscribe((Cours: cours[]) => {
      this.Cours = Cours;
    })
  }

  open(cour) {

    console.log(cour);
    let des = "Consulation du " + cour.nom + " de " + cour.code_module;
    console.log(des);

    const data = {
      id_personne: this.user.id,
      description: des
    }
    this.apistudent.AddToHistory(data).subscribe((rcv: response) => {
    })
    window.open(cour.lien, '_blank');
  }

}
