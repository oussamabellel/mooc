import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users';
import { response } from 'src/app/model/response';
import { ParentService } from 'src/app/service/parent/parent.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addcredits',
  templateUrl: './addcredits.component.html',
  styleUrls: ['./addcredits.component.css']
})
export class AddcreditsComponent implements OnInit {

  user: users = JSON.parse(localStorage.getItem('user'));
  data: response;

  constructor(private apiParent: ParentService, private apiService: ApiService) { }

  ngOnInit() {
  }

  AddCredit(event) {
    event.preventDefault()
    const target = event.target
    const amount = target.querySelector('#amount').value

    const data_to_send = {
      id_parent: this.user.id,
      credits: parseInt(amount)
    }

    this.apiParent.AddCredits(data_to_send).subscribe((data: response) => {
      this.data = data;
      if (!data.error) {

      }
    })

  }

}
