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

    public get_menuitems(){
        return this.http.get(`${this.baseURL}menu.json`);
    }
    public get_products(){
        return this.http.get(`${this.baseURL}product.json`);
    }
}
