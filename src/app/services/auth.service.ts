
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

const AUTH_API = "https://team4-back-end.herokuapp.com/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  observe: 'response' as 'body'
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
     'username': username,
     'password': password
    }, httpOptions)
      .pipe(map(user => {
        return user;
      }))
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + "users", {
      username,
      password
    }, httpOptions);
  }
}
