import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { GlobalService } from '../../service/global.service';
import { LocalstorageService } from '../../service/localstorage.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

    products: any;
    price: any = 0;
    constructor(
        private router: Router,
		private route: ActivatedRoute,
        private api: ApiService,
        public global: GlobalService,
        public local: LocalstorageService,
        private location: Location
    ) { }

    ngOnInit() {
        this.products = this.local.get('selected_products');
        this.update_price();
    }

    back(){
        this.router.navigate(['/list/' + this.local.get('category').id]);
    }
    confirm(){
        this.local.set('total', this.price);
        this.local.set('final', this.products);
        this.router.navigate(['/end']);
    }
    increase(item: any){
        for(let p of this.products){
            if(p.id == item.id){
                item.qty ++;
            }
        }
        this.update_price();
    }
    decrease(item: any){
        for(let p of this.products){
            if(p.id == item.id){
                if(item.qty != 0) item.qty --;
            }
        }
        this.update_price();
    }
    remove(item: any){
        this.products = this.products.filter(_item => {
            return _item.id != item.id
        })
        this.update_price();
    }
    private update_price(){
        this.price = 0;
        for(let item of this.products){
            let price = 0;
            price = parseFloat(item.price) * parseFloat(item.qty);
            for(let tp of item.topping){
                price += parseFloat(tp.count) * parseFloat(item.qty);
            }
            for(let tps of item.topping_secondary){
                price += 0.5 * parseFloat(tps.count) * parseFloat(item.qty);
            }
            item.total_price = price;
            this.price += price;
        }
    }
}
