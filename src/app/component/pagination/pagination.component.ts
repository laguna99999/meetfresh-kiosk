import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

    page_number: number = 0;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    number(num: number){
        if(this.page_number < 10){
            this.page_number = this.page_number * 10 + num;
        }
    }

    erase(){
        this.page_number = (this.page_number - (this.page_number % 10)) / 10;
    }

    enter(){
        if(this.page_number > 0 && this.page_number < 30){
            this.router.navigate(['category', this.page_number]);
        }else{
            //Exception
        }
    }

    help(){

    }
}
