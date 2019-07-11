import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { cours } from 'src/app/model/cours';
import { StudentService} from '../../../service/student/student.service'

@Component({
  selector: 'app-nouveaute',
  templateUrl: './nouveaute.component.html',
  styleUrls: ['./nouveaute.component.css']
})
export class NouveauteComponent implements OnInit {

  Cours:cours[];
  user:users = JSON.parse(localStorage.getItem('user'));

  constructor(private httpClient: HttpClient, private apistudent:StudentService) { }

  ngOnInit() {

   this.apistudent.getLastCours(this.user.id).subscribe((Cours:cours[]) => {
     this.Cours = Cours;
     Cours.forEach(element => {
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
