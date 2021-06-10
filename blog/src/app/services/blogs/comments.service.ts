import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './../../interfaces/comment';
import { Injectable } from '@angular/core';

const baseUrl = 'http://127.0.0.1:8000/api/comments'
const updateUrl = 'http://127.0.0.1:8000/api/comments/update'
const deleteUrl = 'http://127.0.0.1:8000/api/comments/delete'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }


  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(baseUrl);
  }

  get(id: any): Observable<Comment> {
    return this.http.get(`${baseUrl}/${id}/`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${updateUrl}/${id}/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${deleteUrl}/${id}/`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(deleteUrl);
  }

  findByTitle(title: any): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${baseUrl}?title=${title}`);
  }









}
