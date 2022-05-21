import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const apiUrl=  "http://localhost:3000/products/"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {

   }

   getproduct():Observable<any>{
     return this.http.get(apiUrl)
   }
   addproduct(data:any):Observable<any>{
    return this.http.post(apiUrl,data)
  }
  removeproduct(id:number|string):Observable<any>{
    return this.http.delete(apiUrl+id)
  }
  getoneproduct(id:number|string):Observable<any>{
    return this.http.get(apiUrl+id)
  }
  updateproduct(id:number|string,data:any):Observable<any>{
    return this.http.put(apiUrl+id,data)
  }
}
