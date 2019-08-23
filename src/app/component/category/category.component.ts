import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
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
    ) { }

    ngOnInit() {
        this.subscriber = this.route.params.subscribe(params => {
			this.param = +params['param']; // (+) converts string 'param' to a number
		});
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

    private handleResponse(data){
        this.category = data.category.filter(item => {
            return (item.id > (this.param - 1) * 8 - 1) && (item.id < this.param * 8)
        });
    }
    private handleError(error){
        this.error = error.message;
    }
}
