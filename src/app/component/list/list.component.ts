import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { GlobalService } from '../../service/global.service';
import { Location } from '@angular/common';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    param: number = -1;
    subscriber: any;
    product_ids: any;
    products: any;
    error: string;
    constructor(
        private router: Router,
		private route: ActivatedRoute,
        private api: ApiService,
        public global: GlobalService,
        private location: Location
    ) { }

    ngOnInit() {
        if(this.param == -1){
            this.subscriber = this.route.params.subscribe(params => {
    			this.param = +params['param']; // (+) converts string 'param' to a number
    		});
        }
        // For test dummy data
        if(!this.global.current_category){
            this.global.current_category = {
                id: 1,
                name: "Cold Dessert",
                img: "/assets/img/c1.png",
                color: "#94b0c2"
            }
        }

        if(this.global.current_products.length > 0){
            this.product_ids = this.global.current_products.map(item => {
                return item.id
            })
        }
    }

    ngAfterViewInit(){

        return this.api.get_products().subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    add(tag: any, item: any){
        tag.target.classList.toggle('selected');

        tag.target.innerText = "X";
        this.global.current_products.push(item);

        this.router.navigate(['/customize']);
    }
    remove(tag: any, item: any){
        tag.target.classList.toggle('selected');
        if(tag.target.classList.contains('selected')){
            tag.target.innerText = "X";
            this.global.current_products.push(item);
            this.router.navigate(['/customize']);
        }else{
            tag.target.innerText = "ADD";
            this.global.current_products = this.global.current_products.filter(_item => {
                return _item.id != item.id
            })
        }
    }
    confirm(){
        if(this.global.current_products.length > 0){
            this.router.navigate(['/confirm']);
        }
    }
    back(){
        this.location.back();
    }
    previous(){
        this.param -= 1;
        this.ngAfterViewInit();
    }
    next(){
        this.param += 1;
        this.ngAfterViewInit();
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
