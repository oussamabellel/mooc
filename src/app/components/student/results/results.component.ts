import { Component, OnInit } from '@angular/core';
import { result } from 'src/app/model/result';
import { users } from 'src/app/model/users';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  Results: result[];
  user: users = JSON.parse(localStorage.getItem('user'));

  constructor(private apistudent: StudentService) { }

  ngOnInit() {

    this.apistudent.getMyResult(this.user.id).subscribe((Results: result[]) => {
      this.Results = Results;
    })
  }

}
