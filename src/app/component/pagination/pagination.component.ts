import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

    page_number: integer = 0;

    constructor() { }

    ngOnInit() {
    }

    number(num: integer){
        if(this.page_number < 10){
            this.page_number = this.page_number * 10 + num;
        }
    }

    erase(){
        this.page_number = (this.page_number - (this.page_number % 10)) / 10;
    }

    enter(){
        console.log(this.page_number)
    }

    help(){

    }
}
