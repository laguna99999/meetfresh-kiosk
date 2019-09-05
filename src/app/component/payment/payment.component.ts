import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    public gift(){
        this.router.navigate(['/thankyou']);
    }
    public credit(){
        this.router.navigate(['/thankyou']);
    }
    public quick(){
        this.router.navigate(['/thankyou']);
    }

    public back(){
        this.router.navigate(['/member']);
    }
    public cancel(){
        
    }
    public go_menu(){
        this.router.navigate(['/menu']);
    }
}
