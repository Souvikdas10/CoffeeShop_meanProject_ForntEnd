import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact, Menu, User } from '../Classes/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registation_api: string = "http://localhost:2100/reg";
  login_api: string = "http://localhost:2100/login";
  contact_api: string = "http://localhost:2100/contact";
  memuPost_api: string = "http://localhost:2100/getItem";
  single_data_api: string = "http://localhost:2100/single"
  profile_api: string = "http://localhost:2100/profile"


  constructor(private http: HttpClient, private auth: StorageService) { }

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

  single_data_fetch(id: any): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.single_data_api}/${id}`)
  }
  // profile_data(): Observable<User[]> {
  //   return this.http.get<User[]>(this.profile_api,
  // {headers: new HttpHeaders({
  //   'x-access-token': `${this.auth.getToken()}`
  //     })
  //   })}
  // }
  profile_data(id: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.profile_api}/${id}`)
  }

}
