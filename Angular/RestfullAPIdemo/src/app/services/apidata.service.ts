import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  url: any = 'https://jsonplaceholder.typicode.com/photos';

  secondUrl: any = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }
  photos() {
    return this.http.get(this.url);
  }
  pokimon() {
    return this.http.get(this.secondUrl);
  }
}
