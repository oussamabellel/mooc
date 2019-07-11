import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { module } from '../../model/module'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  modules:  module [];
  selecteduser:  module  = {
    id: null,
    matiere:  null,
    price:  null,
  }


  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getAllModules().subscribe((modules: module[])=>{
      this.modules = modules;
      console.log(this.modules);
    })
  }

}
