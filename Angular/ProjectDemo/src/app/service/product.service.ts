import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ProductDataService {
    url: any = 'https://fakestoreapi.com/products'
    constructor(private http: HttpClient) { }
    product() {
        return this.http.get(this.url);
    }
}