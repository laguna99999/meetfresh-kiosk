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

    sugar_level: any = '';
    ice_level: any = '';

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
        if(this.local.get('selected_product')){
            this.product = this.local.get('selected_product');
        }
    }

    public increase(item: any, type: any, tag: any){
        let value = tag.target.parentElement.querySelector('.count');
        value.innerText ++;

    }

    public decrease(item: any, type: any, tag: any){
        let value = tag.target.parentElement.querySelector('.count');
        if(value.innerText != 0){
            value.innerText --;
        }
    }

    public go_menu(){
        this.router.navigate(['/menu']);
    }
    public cancel(){

    }
    public back(){
        
    }
    public cart(){
        this.router.navigate(['/confirm']);
    }
    public add_cart(){
        this.add_to_cart();
        this.router.navigate(['/confirm']);
    }
    public level(tag: any){
        for(let item of tag.target.parentElement.parentElement.getElementsByClassName('check')[Symbol.iterator]()){
            item.setAttribute('checked', 'false');
            item.setAttribute('style', 'background: white; border: 1px solid black;');
        }
        tag.target.setAttribute('checked', 'true');
        tag.target.setAttribute('style', 'background: black;');
    }
    public show(img: any){
        let tag = document.getElementsByClassName('topping-image')[0];
        tag.setAttribute('style', 'display: block');
        tag.getElementsByTagName('img')[0].setAttribute('src', '/assets/img/' + img);
    }
    public hide(){
        document.getElementsByClassName('topping-image')[0].setAttribute('style', 'display: none')
    }
    private add_to_cart(){
        this.toppings = [];
        this.toppings_secondary = [];
        this.sugar_level = 1;
        this.ice_level = 1;
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

        let sugar = document.getElementsByClassName('sugar_level')[0].getElementsByClassName('check');
        let ice = document.getElementsByClassName('ice_level')[0].getElementsByClassName('check');

        for(let item of sugar[Symbol.iterator]()){
            if(item.getAttribute('checked') == 'true'){
                this.product.sugar_level = item.getAttribute('value');
            }
        }

        for(let item of ice[Symbol.iterator]()){
            if(item.getAttribute('checked') == 'true'){
                this.product.ice_level = item.getAttribute('value');
            }
        }

        let updated_products = [];

        if(this.local.get('cart')){
            var flag = false;
            for(let item of this.local.get('cart')){
                if(item.id != this.product.id){
                    updated_products.push(item);
                }else{
                    flag = true;
                    updated_products.push(this.product);
                }
            }
            if(!flag){
                updated_products.push(this.product);
            }
        }else{
            updated_products.push(this.product);
        }

        this.local.set("cart", updated_products);
    }
}
