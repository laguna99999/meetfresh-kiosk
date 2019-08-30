import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../service/localstorage.service';
@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    constructor(
        public local: LocalstorageService
    ) { }

    ngOnInit() {
    }
    
}
