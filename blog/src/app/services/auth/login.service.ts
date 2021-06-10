import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
// import { ThisReceiver } from '@angular/compiler';
// import { map } from 'rxjs/operators'

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'http://127.0.0.1:8000/api/login/'
  logoutUrl = 'http://127.0.0.1:8000/api/logout/'

  constructor(private http:HttpClient) { }


  login(data: { username: string; password: string }) {
    return this.http.post(this.loginUrl, data, { withCredentials: true });
  }

  logout() {
    return this.http.post(this.logoutUrl, {}, { withCredentials: true });
  }


  
}
