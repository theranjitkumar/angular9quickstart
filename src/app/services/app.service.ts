import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ====this is core HttpClient service
import { AppHttpClient } from './httpClient.service'; // ====this is extended HttpClient service

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = 'https://express-restapi.herokuapp.com'

  constructor(private http: HttpClient, private _http: AppHttpClient) {
    console.log('AppService called...!');
  }
  // ============================common==============================================
  getData() {
    return this._http.Get(`/user`);
  }

  // getData() {
  //   return this.http.get(`${this.baseUrl}/user`);
  // }
  getDataById(id) {
    return this.http.get(`${this.baseUrl}/user/${id}`);
  }

  deleteData(id) {
    return this.http.delete(`${this.baseUrl}/user/${id}`);
  }

  postData(pdata) {
    return this._http.Post(`/user`, pdata);
  }
  putData(id, udata) {
    return this.http.put(`${this.baseUrl}/user/${id}`, udata);
  }
  // ==============================common end==========================================
  getPosts() {
    return this.http.get(`${this.baseUrl}/posts`);
  }
}
