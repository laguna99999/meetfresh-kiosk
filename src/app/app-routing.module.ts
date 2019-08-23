import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { CategoryComponent } from './component/category/category.component';
import { ListComponent } from './component/list/list.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pager', component: PaginationComponent },
    { path: 'category/:param', component: CategoryComponent },
    { path: 'list/:param', component: ListComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
