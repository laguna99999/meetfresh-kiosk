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

    constructor(
        private router: Router,
		private route: ActivatedRoute,
        private api: ApiService,
    ) { }

    ngOnInit() {
        this.subscriber = this.route.params.subscribe(params => {
			this.param = +params['param']; // (+) converts string 'param' to a number
		});
        return this.api.category().subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    ngAfterViewInit(){

    }

    ngOnDestroy(){
        this.subscriber.unsubscribe();
    }

    private handleResponse(data){
        this.category = data.category;
        console.log(this.category)
    }
    private handleError(error){
        console.error(error.message);
    }
}
