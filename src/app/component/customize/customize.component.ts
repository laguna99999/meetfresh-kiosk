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

    product: any;

    constructor(
        private router: Router,
		private route: ActivatedRoute,
        private api: ApiService,
        public global: GlobalService,
        public local: LocalstorageService,
        private location: Location
    ) { }

    ngOnInit() {
        if(this.global.current_products.length == 0){
            this.global.current_products = [{
                category_id: 55,
                id: 375,
                img: "/assets/img/p5.png",
                name: "Taro Ball",
                price: 6.9
            }];
        }
        this.product = this.global.current_products[0];
        
    }

    back(){
        this.location.back();
    }
    confirm(){
        this.router.navigate(['/confirm']);
    }
    select(item: any){
        this.product = item;
    }
}
