import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

import { Cart, Contact, Menu, User } from '../Classes/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registation_api: string = "http://localhost:2100/reg";
  login_api: string = "http://localhost:2100/login";
  contact_api: string = "http://localhost:2100/contact";
  memuPost_api: string = "http://localhost:2100/getItem";
  single_data_api: string = "http://localhost:2100/single";
  profile_api: string = "http://localhost:2100/profile";
  Cart_api: string = "http://localhost:2100/getcart";
  add_api: string = "http://localhost:2100/addcart";




  constructor(private http: HttpClient, private auth: StorageService) { }

  register(formdata: any): Observable<User[]> {
    return this.http.post<User[]>(this.registation_api, formdata)
  }

  loginUser(loginData: any): Observable<User[]> {
    return this.http.post<User[]>(this.login_api, loginData)
    .pipe(catchError(this.errorHandler))
  }

  //error Handler
  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error || "Server Error")
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

  profile_data(): Observable<User[]> {
    let data=this.auth.getData()
    let pid=data[0].id
    console.log("profile Data:",data,pid);
    return this.http.get<User[]>(`${this.profile_api}/${pid}`)
  }

Cart_data():Observable<Cart[]>{
  return this.http.get<Cart[]>(this.Cart_api)

}
AddToCart(obj:any):Observable<Cart[]>{
  return this.http.post<Cart[]>(this.add_api,obj)

}

}
