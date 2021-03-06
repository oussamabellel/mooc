import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { module } from './model/module';
import { throwError, of } from 'rxjs';
import { Observable } from 'rxjs';
import { users } from './model/users'
import { catchError } from 'rxjs/operators';
import { cours } from './model/cours';
import { response } from './model/response';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1/edsa-api";
  constructor(private httpClient: HttpClient) { }

  loggedInStatus = JSON.parse(localStorage.getItem('loggedin') || 'false');

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedin', 'true');
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedin') || this.loggedInStatus.toString())
  }
  getAllModules(): Observable<module[]> {
    return this.httpClient.get<module[]>(`${this.PHP_API_SERVER}/v1/get_all_modules.php`); // catch error;
  }

  ModifiyProfil(user: users) {
    return this.httpClient.post<response>(`${this.PHP_API_SERVER}/v1/modify_profile.php?id=${user.id}`, user);
  }

  userregister(user) {
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}/v1/angular.php`, user).pipe(catchError(this.errorHandler));  // catch error
  }

  userlogin(user): Observable<response> {
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}/v1/angular_login.php`, user).pipe(catchError(this.errorHandler)
    );  // catch error
  }

  /** Error Handling method */

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      return 'An error occurred:' + error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      return `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');

  }
}
