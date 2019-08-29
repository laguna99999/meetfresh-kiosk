import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { GlobalService } from '../../service/global.service';
import { LocalstorageService } from '../../service/localstorage.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-customize',
    templateUrl: './customize.component.html',
    styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit {

    subscriber: any;

    product: any;
    param: number;

    toppings: any = [];
    toppings_secondary: any = [];

    constructor(
        private router: Router,
		private route: ActivatedRoute,
        private api: ApiService,
        public global: GlobalService,
        public local: LocalstorageService,
        private location: Location
    ) { }

    ngOnInit() {
        this.subscriber = this.route.params.subscribe(params => {
            this.param = +params['param']; // (+) converts string 'param' to a number
        });

        for(let item of this.local.get('selected_products')){
            if(item.id == this.param){
                this.product = item;
            }
        }
    }

    increase(item: any, type: any, tag: any){
        let value = tag.target.parentElement.querySelector('.count');
        value.innerText ++;

    }

    decrease(item: any, type: any, tag: any){
        let value = tag.target.parentElement.querySelector('.count');
        if(value.innerText != 0){
            value.innerText --;
        }
    }

    back(){
        this.update_seleced_products();
        this.router.navigate(['/list/' + this.local.get('category').id]);
    }
    confirm(){
        this.update_seleced_products();
        this.router.navigate(['/confirm']);
    }
    select(item: any){
        this.product = item;
    }

    private update_seleced_products(){
        this.toppings = [];
        this.toppings_secondary = [];
        let tp = document.getElementsByClassName('tp');
        let tps = document.getElementsByClassName('tps');

        for(let item of tp[Symbol.iterator]()){
            if(item.innerText != 0){
                this.toppings.push({
                    name: item.parentElement.querySelector('.item').innerText,
                    count: item.innerText
                });
            }
        }
        for(let item of tps[Symbol.iterator]()){
            if(item.innerText != 0){
                this.toppings_secondary.push({
                    name: item.parentElement.querySelector('.item').innerText,
                    count: item.innerText
                });
            }
        }
        this.product.topping = this.toppings;
        this.product.topping_secondary = this.toppings_secondary;

        let updated_products = [];

        for(let item of this.local.get('selected_products')){
            if(item.id != this.product.id){
                updated_products.push(item);
            }else{
                updated_products.push(this.product);
            }
        }

        this.local.set("selected_products", updated_products);
    }
}
