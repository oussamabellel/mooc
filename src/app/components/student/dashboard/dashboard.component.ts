import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/service/student/student.service';
import { cours } from 'src/app/model/cours';

interface historique {
  date: string;
  description: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  history: historique[] = [{
    date: "19/07/2019 15:15",
    description: "Consultation du cours 1 de Architectures distribués"
  },
  {
    date: "18/07/2019 15:15",
    description: "Effectuer QCM de HMIN220"
  },
  {
    date: "10/07/2019 15:15",
    description: "Abonnement dans le cours HMIN213"
  }]

  Cours: cours[];
  user: users = JSON.parse(localStorage.getItem('user'));

  constructor(private httpClient: HttpClient, private apistudent: StudentService) { }

  ngOnInit() {
    this.apistudent.getLastCours(this.user.id).subscribe((Cours: cours[]) => {
      this.Cours = Cours;
    })
  }

  open(link) {
    window.open(link, '_blank');
  }

}
