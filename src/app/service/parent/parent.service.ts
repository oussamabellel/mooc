import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { connexion } from 'src/app/model/connexion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  PHP_API_SERVER = "http://127.0.0.1/edsa-api";
  constructor(private httpClient: HttpClient) { }

  getChildrenLastConnexion(id): Observable<connexion[]> {
    return this.httpClient.get<connexion[]>(`${this.PHP_API_SERVER}/v1/get_last_connexion.php?id=${id}`);
  }
}
