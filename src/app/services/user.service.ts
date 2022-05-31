import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const apiurl = "http://localhost:3000/users/"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  signup(data:any):Observable<any>{
    return this.http.post(apiurl,data)
  }
}
