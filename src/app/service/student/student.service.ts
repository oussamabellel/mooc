import { Injectable } from '@angular/core';
import { cours } from '../../model/cours';
import { module } from '../../model/module';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { result } from 'src/app/model/result';
import { response } from 'src/app/model/response';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  PHP_API_SERVER = "http://127.0.0.1/edsa-api";
  constructor(private httpClient: HttpClient) { }

  getLastCours(id): Observable<cours[]> {
    return this.httpClient.get<cours[]>(`${this.PHP_API_SERVER}/v1/get_last_cours.php?id=${id}`);
  }

  getCoursOfModule(id): Observable<cours[]> {
    return this.httpClient.get<cours[]>(`${this.PHP_API_SERVER}/v1/get_cours_of_modules.php?id=${id}`);
  }

  getMyModule(id): Observable<module[]> {
    return this.httpClient.get<module[]>(`${this.PHP_API_SERVER}/v1/get_my_modules.php?id=${id}`);
  }

  getModuleToBuy(id): Observable<module[]> {
    return this.httpClient.get<module[]>(`${this.PHP_API_SERVER}/v1/get_modules_to_buy.php?id=${id}`);
  }

  getMyResult(id): Observable<result[]> {
    return this.httpClient.get<result[]>(`${this.PHP_API_SERVER}/v1/getmyresult.php?id=${id}`);
  }

  BuyModule(id_personne, module: module): Observable<response> {
    return this.httpClient.post<response>(`${this.PHP_API_SERVER}/v1/Buy_module.php?id=${id_personne}`, module);
  }



}
