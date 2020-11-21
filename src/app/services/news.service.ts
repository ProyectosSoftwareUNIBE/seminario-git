import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private api = 'http://rafaelfalconi.biz:8080/angular/news';

  private headers: HttpHeaders;

  constructor(private http: HttpClient, private rout: Router) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }


  getAllNews(): Observable<any> {
    return this.http.get(this.api, {headers: this.headers}).pipe(
      map(response => response),
      catchError(error => {
        localStorage.removeItem('token');
        this.rout.navigate(['/']);
        return error;
      })
    );
  }

  getNewById(id: string): Observable<any> {
    return this.http.get(this.api + '\\' + id, {headers: this.headers}).pipe(
      map(response => response),
      catchError(error => {
        localStorage.removeItem('token');
        this.rout.navigate(['/']);
        return error;
      })
    );
  }


}
