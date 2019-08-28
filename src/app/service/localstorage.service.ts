import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalstorageService {
    /**
     * Local storage set value with name
     */
    public set(name: string, value: any){
        localStorage.setItem(name, JSON.stringify(value));
    }

    /**
     * Local storage get value with name
     */
    public get(name: string){
        return JSON.parse(localStorage.getItem(name));
    }

    /**
     * Local storage remove value with name
     */
    public remove(name: string){
        localStorage.removeItem(name);
    }

    /**
     * Local storage clear all values
     */
    public flush(){
        localStorage.clear();
    }
    constructor() { }
}
