import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl;

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {}

  // return what comes back from this http call
  getUsers() {
    return this.http.get(`${this.apiUrl}/user`);
  }

  getUser(userId){
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }

  addUser(data) {
    return this.http.post(`${this.apiUrl}/user`, data);
  }

  editUser(data){
    return this.http.put(`${this.apiUrl}/user/${data.id}`, data);
  }

  deleteUser(userId){
    return this.http.delete(`${this.apiUrl}/user/${userId}`);
  }
}