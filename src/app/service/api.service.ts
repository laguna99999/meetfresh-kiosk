import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private baseURL = "/assets/dummydata/";

    constructor(
        private http: HttpClient
    ) { }

    public get_categories(){
        return this.http.get(`${this.baseURL}category.json`);
    }
    public get_products(){
        return this.http.get(`${this.baseURL}product.json`);
    }
}
