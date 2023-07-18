import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact, Menu, User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registation_api: string = "http://localhost:2100/reg";
  login_api: string = "http://localhost:2100/login";
  contact_api: string = "http://localhost:2100/contact";
  memuPost_api: string = "http://localhost:2100/getItem";

  constructor(private http: HttpClient) { }

  register(formdata: any): Observable<User[]> {
    return this.http.post<User[]>(this.registation_api, formdata)
  }
  loginUser(loginData: any): Observable<User[]> {
    return this.http.post<User[]>(this.login_api, loginData)
  }

  contact(data: any): Observable<Contact[]> {
    return this.http.post<Contact[]>(this.contact_api, data)
  }
  item_Menu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.memuPost_api)
  }

}
