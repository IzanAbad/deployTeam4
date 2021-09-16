import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get("https://team4-back-end.herokuapp.com/users", {responseType: 'text'});
  }
}
