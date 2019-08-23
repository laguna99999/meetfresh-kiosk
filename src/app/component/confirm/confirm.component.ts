import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { GlobalService } from '../../service/global.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

    constructor(
        private router: Router,
		private route: ActivatedRoute,
        private api: ApiService,
        public global: GlobalService,
        private location: Location
    ) { }

    ngOnInit() {
    }

    back(){
        this.location.back();
    }
    confirm(){
        this.router.navigate(['/end']);
    }
}
