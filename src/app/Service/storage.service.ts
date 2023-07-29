import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setData(name: string, email: string, id: string, token: string) {
    window.localStorage.setItem('name', name);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('id', id);
    window.sessionStorage.setItem('token', token);
  }
  getData() {
    const saveData = [];
    let data = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      id: window.localStorage.getItem('id'),
    }
    saveData.push(data);
    return saveData;
  }
  getToken() {
    return window.sessionStorage.getItem('token')
  }
  getDestroy() {
    return window.sessionStorage.clear()
  }
}
