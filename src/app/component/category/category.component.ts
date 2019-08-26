import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { GlobalService } from '../../service/global.service';
@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    param: number;
    subscriber: any;

    category: any;
    error: string;
    constructor(
        private router: Router,
		private route: ActivatedRoute,
        private api: ApiService,
        public global: GlobalService,
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit(){
        return this.api.get_categories().subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }
    ngOnDestroy(){

    }
    setCurrent(item: any){
        this.global.current_category = item;
    }

    private handleResponse(data){
        this.category = data.category;
    }
    private handleError(error){
        this.error = error.message;
    }
}
