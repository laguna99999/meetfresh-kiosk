import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { GlobalService } from '../../service/global.service';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    param: number;
    subscriber: any;

    products: any;
    error: string;
    constructor(
        private router: Router,
		private route: ActivatedRoute,
        private api: ApiService,
        private global: GlobalService,
    ) { }

    ngOnInit() {
        this.subscriber = this.route.params.subscribe(params => {
			this.param = +params['param']; // (+) converts string 'param' to a number
		});
        // For test dummy data
        if(!this.global.current_category){
            this.global.current_category = {
                id: 1,
                name: "Cold Dessert",
                img: "/assets/img/c1.png",
                color: "#94b0c2"
            }
        }
    }

    ngAfterViewInit(){
        return this.api.get_products().subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    add(id: number){
        console.log(id);
    }
    menu(){
        
    }
    private handleResponse(data){
        this.products = data.product.filter(item => {
            return (item.category_id == this.param);
        });
    }
    private handleError(error){
        this.error = error.message;
    }

}
