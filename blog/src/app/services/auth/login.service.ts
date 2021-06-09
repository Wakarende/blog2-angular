import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { map } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'http://127.0.0.1:8000/api/register/'

  constructor(private http:HttpClient) { }


  login(username: string,password:string){
    return this.http.post<any>(this.loginUrl, {username,password}, httpOptions).pipe(map(user=>{
      if(user && user.toke){
        localStorage.setItem("currentUser", JSON.stringify(user))
      }
      return user;
    }
    
    ))
  }

}
