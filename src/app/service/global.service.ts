import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    public pager_category: any;
    public current_category: any;
    public current_product: any;
    constructor() { }
}
