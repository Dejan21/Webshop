import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  // ova produktite ne mora da se od API moze da se napravat i so JSON file
  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any) => { // pipe let us combine multiple functions into a single function
      return res;
    }))
  }
}
