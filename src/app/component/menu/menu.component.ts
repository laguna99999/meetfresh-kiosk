import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { LocalstorageService } from '../../service/localstorage.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    menu: any;

    constructor(
        private api: ApiService,
        public local: LocalstorageService
    ) { }

    ngOnInit() {
        return this.api.get_menuitems().subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }
    public setCurrentMenu(item: any){
        this.local.set("menu", item);
    }
    public cart(){
        this.router.navigate(['/confirm']);
    }
    private handleResponse(data){
        this.menu = data.menu;
    }
    private handleError(error){
        console.log(error);
    }
}
