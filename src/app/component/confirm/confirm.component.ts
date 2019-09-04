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

    public back(){
        this.router.navigate(['/list/' + this.local.get('menu').id]);
    }

    public increase(item: any){
        for(let p of this.products){
            if(p.id == item.id){
                item.qty ++;
            }
        }
        this.update_price();
    }
    public decrease(item: any){
        for(let p of this.products){
            if(p.id == item.id){
                if(item.qty != 1) item.qty --;
            }
        }
        this.update_price();
    }

    public t_increase(item: any, tp: any){
        for(let p of this.products){
            if(p.id == item.id){
                for(let t of p.topping){
                    if(t.name == tp.name){
                        tp.count ++;
                    }
                }
            }
        }
        this.update_price();
    }
    public t_decrease(item: any, tp: any){
        for(let p of this.products){
            if(p.id == item.id){
                for(let t of p.topping){
                    if(t.name == tp.name){
                        if(tp.count != 1) tp.count --;
                    }
                }
            }
        }
        this.update_price();
    }
    public ts_increase(item: any, tps: any){
        for(let p of this.products){
            if(p.id == item.id){
                for(let t of p.topping_secondary){
                    if(t.name == tps.name){
                        tps.count ++;
                    }
                }
            }
        }
        this.update_price();
    }
    public ts_decrease(item: any, tps: any){
        for(let p of this.products){
            if(p.id == item.id){
                for(let t of p.topping_secondary){
                    if(t.name == tps.name){
                        if(tps.count != 1) tps.count --;
                    }
                }
            }
        }
        this.update_price();
    }

    public remove(item: any){
        this.products = this.products.filter(_item => {
            return _item.id != item.id
        })
        this.update_price();
    }
    public checkout(){
        this.local.set('total', this.price);
        this.local.set('final', this.products);
        this.router.navigate(['/member']);
    }
    public home(){
        this.router.navigate(['/home']);
    }
    public dine(){
        this.local.set('total', this.price);
        this.local.set('final', this.products);
        this.router.navigate(['/member']);
    }
    public togo(){
        this.local.set('total', this.price);
        this.local.set('final', this.products);
        this.router.navigate(['/member']);
    }
    public cart(){
        this.router.navigate(['/confirm']);
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
        this.local.set('selected_products', this.products);
    }
}
