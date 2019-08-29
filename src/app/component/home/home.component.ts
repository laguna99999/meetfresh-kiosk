import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../service/localstorage.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    logo: string = "";

    constructor(
        private router: Router,
        public local: LocalstorageService
    ) { }

    ngOnInit() {
        this.local.flush();
        if(window.innerWidth < 450){
            this.logo = "assets/img/logo.png";
        }else{
            this.logo = "assets/img/logo.png";
        }
    }
}
