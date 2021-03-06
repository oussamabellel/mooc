import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { connexion } from 'src/app/model/connexion';
import { Observable } from 'rxjs';
import { users } from 'src/app/model/users';
import { history } from 'src/app/model/history';
import { response } from 'src/app/model/response';
import { niveau } from 'src/app/model/niveau';


interface res {
  result: number;
  nom: string;
}

@Injectable({
  providedIn: 'root'
})



export class ParentService {

  PHP_API_SERVER = "http://127.0.0.1/edsa-api";
  constructor(private httpClient: HttpClient) { }

  getChildrenLastConnexion(id): Observable<connexion[]> {
    return this.httpClient.get<connexion[]>(`${this.PHP_API_SERVER}/v1/get_last_connexion.php?id=${id}`);
  }

  getAllChildrens(id): Observable<users[]> {
    return this.httpClient.get<users[]>(`${this.PHP_API_SERVER}/v1/get_all_my_children.php?id=${id}`);
  }

  getHistory(id): Observable<history[]> {
    return this.httpClient.get<history[]>(`${this.PHP_API_SERVER}/v1/get_history.php?id=${id}`);
  }

  CreateChildrenAccount(user: users, id, credits): Observable<response> {
    return this.httpClient.post<response>(`${this.PHP_API_SERVER}/v1/Add_children.php?id=${id}&credits=${credits}`, user);
  }

  Associate(data): Observable<response> {
    return this.httpClient.post<response>(`${this.PHP_API_SERVER}/v1/associer_parent.php?`, data);
  }

  AddCredits(data): Observable<response> {
    return this.httpClient.post<response>(`${this.PHP_API_SERVER}/v1/Add_credits.php?`, data);
  }

  GetAllLevel(id): Observable<niveau[]> {
    return this.httpClient.get<niveau[]>(`${this.PHP_API_SERVER}/v1/getalllevel.php?id=${id}`);
  }

  Subscribe(data): Observable<response> {
    return this.httpClient.post<response>(`${this.PHP_API_SERVER}/v1/subscribe.php?id=${data.id}`, data);
  }

  GetModuleResult(id, id_module): Observable<res[]> {
    return this.httpClient.get<res[]>(`${this.PHP_API_SERVER}/v1/getModuleResult.php?id=${id}&id_module=${id_module}`);
  }

  GetLastChildrenConnexion(id): Observable<connexion[]> {
    return this.httpClient.get<connexion[]>(`${this.PHP_API_SERVER}/v1/GetLastConnexionChildren.php?id=${id}`);
  }

}
