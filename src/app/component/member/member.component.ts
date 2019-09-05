import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

    showCancelModal: Boolean = false;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    public scan(){
        //this.router.navigate(['/confirm']);
    }
    public payment(){
        this.router.navigate(['/payment']);
    }

    public back(){
        this.router.navigate(['/confirm']);
    }
    public go_menu(){
        this.router.navigate(['/menu']);
    }
    public cancel(){
        this.showCancelModal = true;
    }
    public yes(){
        this.showCancelModal = false;
        this.router.navigate(['/']);
    }
    public no(){
        this.showCancelModal = false;
    }
}
