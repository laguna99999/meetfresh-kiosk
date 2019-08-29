import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { GlobalService } from '../../service/global.service';
import { LocalstorageService } from '../../service/localstorage.service';
import { Location } from '@angular/common';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    param: number = -1;
    subscriber: any;

    category: any;
    sub_category_id: number = 1;
    product_ids: any;
    all_products: any;
    products: any;

    selected_products: any;
    error: string;

    constructor(
        private router: Router,
		private route: ActivatedRoute,
        private api: ApiService,
        public global: GlobalService,
        public local: LocalstorageService,
        private location: Location
    ) { }

    ngOnInit() {
        this.selected_products = [];
        if(this.param == -1){
            this.subscriber = this.route.params.subscribe(params => {
    			this.param = +params['param']; // (+) converts string 'param' to a number
    		});
        }

        this.category = this.local.get('category');

        if(this.local.get('selected_products')){
            this.selected_products = [...this.local.get('selected_products')];
        }

        if(this.selected_products){
            this.product_ids = this.selected_products.map(item => {
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

        this.selected_products.push(item);
        this.local.set("selected_products", this.selected_products);
        this.router.navigate(['/customize/' + item.id]);
    }
    remove(tag: any, item: any){
        tag.target.classList.toggle('selected');
        if(tag.target.classList.contains('selected')){
            tag.target.innerText = "X";
            this.selected_products.push(item);
            this.local.set("selected_products", this.selected_products);
            this.router.navigate(['/customize/' + item.id]);
        }else{
            tag.target.innerText = "ADD";
            this.selected_products = this.selected_products.filter(_item => {
                return _item.id != item.id
            })
            this.local.set("selected_products", this.selected_products);
        }
    }

    confirm(){
        if(this.selected_products.length > 0){
            this.router.navigate(['/confirm']);
        }
    }
    back(){
        this.location.back();
    }

    previous(){
        if(this.sub_category_id == 1){
            this.sub_category_id = this.global.sub_category.length + 1;
        }
        this.sub_category_id -= 1;
        this.filterBySubCategory();
    }
    next(){
        if(this.sub_category_id == this.global.sub_category.length){
            this.sub_category_id = 0;
        }
        this.sub_category_id += 1;
        this.filterBySubCategory();
    }


    setSubCategory(id: number){
        this.sub_category_id = id;
        this.filterBySubCategory();
    }
    private handleResponse(data){
        this.all_products = data.product.filter(item => {
            return (item.category_id == this.param);
        });
        this.filterBySubCategory();
    }
    private handleError(error){
        this.error = error.message;
    }
    private filterBySubCategory(){
        this.products = this.all_products.filter(item => {
            return (item.sub_category_id == this.sub_category_id);
        });
    }
}
