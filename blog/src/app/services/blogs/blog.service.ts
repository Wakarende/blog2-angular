import { Blog } from './../../blog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl ='http://127.0.0.1:8000/api/blogs'
const updateUrl = 'http://127.0.0.1:8000/api/blogs/update'
const deleteUrl = 'http://127.0.0.1:8000/api/blogs/delete'


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>(baseUrl);
  }

  get(id: any): Observable<Blog> {
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

  findByTitle(title: any): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${baseUrl}?title=${title}`);
  }

}

