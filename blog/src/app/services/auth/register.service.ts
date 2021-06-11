import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const httpOptions ={
//   headers:new HttpHeaders({
//     'Content-Type':'application/json'
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl ='http://127.0.0.1:8000/api/register/'
  userUrl = 'http://127.0.0.1:8000/api/user'

  constructor(private http:HttpClient) { }

  register(data: { username:string; email: string; password:string }) {
    return this.http.post(this.registerUrl, data);
  }

  getUser() {
    return this.http.get(this.userUrl, { withCredentials: true });
  }




}

