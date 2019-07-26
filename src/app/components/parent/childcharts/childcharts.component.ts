import { Component, OnInit, Input, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student/student.service';
import { module } from 'src/app/model/module';
import { Chart } from 'chart.js';
import * as $ from "jQuery";
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ParentService } from 'src/app/service/parent/parent.service';

interface res {
  result: number;
  nom: string;
}


@Component({
  selector: 'app-childcharts',
  templateUrl: 'childcharts.component.html',
  styleUrls: ['./childcharts.component.css']
})


export class ChildchartsComponent implements OnInit {

  @Input() message: string;
  id: number;
  labels: string[] = [];
  results: number[] = [];
  chart = [];
  data: res[];

  constructor(private apiParent: ParentService, private route: ActivatedRoute, private router: Router, private apistudent: StudentService) { }

  ngOnChanges(changes: SimpleChanges) {

    let labs = [];
    let results = [];

    console.log(changes.message.currentValue);
    this.apiParent.GetModuleResult(this.id, changes.message.currentValue).subscribe((data: res[]) => {
      this.data = data;
      this.data.forEach(element => {
        labs.push(String(element.nom));
        results.push(element.result);
      });
    });

    this.labels = labs;
    this.results = results;

    setTimeout(() => {
      this.chart = new Chart('myChart', {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [{
            data: this.results,
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
      }).update();

    }, 2500);

  }
  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}






