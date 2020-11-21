import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://rafaelfalconi.biz:8080/angular/auth/sigin';

  constructor(private http: HttpClient) {

  }

  login(user: UserModel): Observable<any> {
    return this.http.post(this.api, user).pipe(
      map(response => response),
      catchError(error => {
        alert(error.error.error);
        return error;
      })
    );

  }
}
