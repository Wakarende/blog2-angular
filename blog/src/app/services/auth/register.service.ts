import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl ='http://127.0.0.1:8000/api/register'

  constructor(private http:HttpClient) { }
}

