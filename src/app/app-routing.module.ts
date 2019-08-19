import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { PaginationComponent } from './component/pagination/pagination.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pager', component: PaginationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
