import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { GlobalService } from '../../service/global.service';
import { LocalstorageService } from '../../service/localstorage.service';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    param: number = -1;
    subscriber: any;

    menu: any;
    category_id: number = 1;

    all_products: any;
    products: any;

    selected_product: any;

    constructor(
        private router: Router,
		private route: ActivatedRoute,
        private api: ApiService,
        public global: GlobalService,
        public local: LocalstorageService
    ) { }

    ngOnInit() {
        this.selected_product = [];
        if(this.param == -1){
            this.subscriber = this.route.params.subscribe(params => {
    			this.param = +params['param']; // (+) converts string 'param' to a number
    		});
        }

        this.menu = this.local.get('menu');

        if(this.local.get('selected_product')){
            this.selected_product = this.local.get('selected_product');
        }
    }

    ngAfterViewInit(){
        return this.api.get_products().subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    add_product(item: any){
        item.qty = 1;
        this.selected_product = item;
        this.local.set("selected_product", this.selected_product);
        this.router.navigate(['/customize/' + item.id]);
    }

    public previous(){
        if(this.category_id == 1){
            this.category_id = this.global.category.length + 1;
        }
        this.category_id -= 1;
        this.filterByCategory();
    }
    public next(){
        if(this.category_id == this.global.category.length){
            this.category_id = 0;
        }
        this.category_id += 1;
        this.filterByCategory();
    }
    public setCategory(id: number){
        this.category_id = id;
        this.filterByCategory();
    }
    public go_menu(){
        this.router.navigate(['/menu']);
    }
    public cart(){
        this.router.navigate(['/confirm']);
    }
    public cancel(){
        
    }
    private handleResponse(data){
        this.all_products = data.product.filter(item => {
            return (item.menu_id == this.param);
        });
        this.filterByCategory();
    }
    private handleError(error){
        console.log(error);
    }
    private filterByCategory(){
        this.products = this.all_products.filter(item => {
            return (item.category_id == this.category_id);
        });
    }
}
