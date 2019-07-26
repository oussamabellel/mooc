import { Component, OnInit, AfterViewInit, ElementRef, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student/student.service';
import { result } from 'src/app/model/result';
import { module } from 'src/app/model/module';
import { Chart } from 'chart.js';
import { ParentService } from 'src/app/service/parent/parent.service';
import { connexion } from 'src/app/model/connexion';


interface historique {
  date: string;
  description: string;
}

@Component({
  selector: 'app-childrenresult',
  templateUrl: './childrenresult.component.html',
  styleUrls: ['./childrenresult.component.css']
})


export class ChildrenresultComponent implements OnInit, AfterViewInit {

  moduleprog: module;
  message: string;
  history: historique[];

  // history: historique[] = [{
  //   date: "19/07/2019 15:15",
  //   description: "Consultation du cours 1 de Architectures distribués"
  // },
  // {
  //   date: "18/07/2019 15:15",
  //   description: "Effectuer QCM de HMIN220"
  // },
  // {
  //   date: "10/07/2019 15:15",
  //   description: "Abonnement dans le cours HMIN213"
  // }];

  ChildHistoryConnexion: connexion[];
  ModuleGraph: module;
  Modules: module[];
  Results: result[];
  id: number;
  Labs = [];
  Res: number[] = [];
  chart = [];

  constructor(private apiParent: ParentService, private route: ActivatedRoute, private router: Router, private apistudent: StudentService) { }

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
    }, 2500)

  }

  ShowGraph(md) {
    this.message = md.id;
  }

  ngOnInit() {

    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.apiParent.GetLastChildrenConnexion(this.id).subscribe((ChildHistoryConnexion: connexion[]) => {
      this.ChildHistoryConnexion = ChildHistoryConnexion;
    });

    this.apistudent.getMyResult(this.id).subscribe((Results: result[]) => {
      this.Results = Results;
      Results.forEach(element => {
        this.Labs.push(element.id_module);
        this.Res.push(element.result);
      });
    });

    this.apistudent.GetModuleOfSubscribtion(this.id).subscribe((modules: module[]) => {
      this.Modules = modules;
    })

    this.apistudent.GetFullHistory(this.id).subscribe((history: historique[]) => {
      this.history = history;
    })

  }
}
