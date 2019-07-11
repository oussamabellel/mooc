import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { StudentService } from 'src/app/service/student/student.service';
import { users } from 'src/app/model/users';
import { result } from 'src/app/model/result';


@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html',
  styleUrls: ['./progression.component.css']
})


export class ProgressionComponent implements OnInit {

  ok: boolean = false;
  Labs = [];
  Res: number[] = [];
  chart = [];
  Results: result[];
  user: users = JSON.parse(localStorage.getItem('user'));

  constructor(private apistudent: StudentService) {

  }



  ngOnInit() {

    this.apistudent.getMyResult(this.user.id).subscribe((Results: result[]) => {
      this.Results = Results;
      Results.forEach(element => {

        this.Labs.push(element.id_module);
        this.Res.push(element.result);
        console.log(this.Labs);
        console.log(this.Res);
        console.log(element);
      });
    });


    setTimeout(() => {

      this.chart = new Chart('myChart', {
        type: 'line',
        data: {
          labels: this.Labs,
          datasets: [{
            data: this.Res,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4
          }]
        },
        options: {

          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });

    }, 2000);



  }

}
