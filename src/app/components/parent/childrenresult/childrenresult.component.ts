import { Component, OnInit, AfterViewInit, ElementRef, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student/student.service';
import { result } from 'src/app/model/result';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-childrenresult',
  templateUrl: './childrenresult.component.html',
  styleUrls: ['./childrenresult.component.css']
})



export class ChildrenresultComponent implements OnInit, AfterViewInit {

  Results: result[];
  id: number;
  Labs = [];
  Res: number[] = [];
  chart = [];

  constructor(private route: ActivatedRoute, private router: Router, private apistudent: StudentService) { }

  ngAfterViewInit(): void {

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
    }, 2000)

  }


  ngOnInit() {

    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);

    this.apistudent.getMyResult(this.id).subscribe((Results: result[]) => {
      this.Results = Results;
      Results.forEach(element => {
        this.Labs.push(element.id_module);
        this.Res.push(element.result);
        console.log(element);
      });
    });

  }

  // setTimeout(() => {

  //   // this.apistudent.getMyResult(this.id).subscribe((Results: result[]) => {
  //   //   this.Results = Results;
  //   //   Results.forEach(element => {


  //   //     console.log(this.Labs);
  //   //     console.log(this.Res);
  //   //     console.log(element);
  //   //   });
  //   // });

  //   this.chart = new Chart('myChart', {
  //     type: 'line',
  //     data: {
  //       labels: this.Labs,
  //       datasets: [{
  //         data: this.Res,
  //         backgroundColor: 'transparent',
  //         borderColor: '#007bff',
  //         borderWidth: 4
  //       }]
  //     },
  //     options: {

  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });

  // }, 4000);



}
