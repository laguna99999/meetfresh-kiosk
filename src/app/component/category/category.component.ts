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
        this.subscriber = this.route.params.subscribe(params => {
			this.param = +params['param']; // (+) converts string 'param' to a number
		});
        this.global.pager_category = this.param;
    }

    ngAfterViewInit(){
        return this.api.get_categories().subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    ngOnDestroy(){
        this.subscriber.unsubscribe();
    }

    setCurrent(item: any){
        this.global.current_category = item;
    }

    private handleResponse(data){
        this.category = data.category.filter(item => {
            return (item.id > (this.param - 1) * 12 - 1) && (item.id < this.param * 12)
        });
    }
    private handleError(error){
        this.error = error.message;
    }
}
