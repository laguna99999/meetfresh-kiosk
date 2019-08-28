import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { LocalstorageService } from '../../service/localstorage.service';
@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    category: any;
    error: string;

    constructor(
        private api: ApiService,
        public local: LocalstorageService
    ) { }

    ngOnInit() {
        return this.api.get_categories().subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }
    private setCurrentCategory(item: any){
        this.local.set("category", item);
    }

    private handleResponse(data){
        this.category = data.category;
    }
    private handleError(error){
        this.error = error.message;
    }
}
