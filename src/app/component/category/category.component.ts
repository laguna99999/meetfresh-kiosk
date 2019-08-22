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
        return this.api.category().subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    ngOnDestroy(){
        this.subscriber.unsubscribe();
    }

    private handleResponse(data){
        this.category = data.category;
    }
    private handleError(error){
        this.error = error.message;
    }
}
