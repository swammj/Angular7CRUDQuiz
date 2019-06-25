import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.apiUrl;

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {}

  // return what comes back from this http call
  getCategories() {
    return this.http.get(`${this.apiUrl}/category`);
  }
}
