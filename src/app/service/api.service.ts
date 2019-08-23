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

    public get_categories(page: string){
        return this.http.get(`${this.baseURL}category.json`);
    }
    public product(){
        return this.http.get(`${this.baseURL}product.json`);
    }
}
