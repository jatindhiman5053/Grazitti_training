import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url:any = 'https://jsonplaceholder.typicode.com/users'
  
  constructor(private http:HttpClient) { }
  user (){
    return this.http.get(this.url);
  }
}
