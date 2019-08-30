import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { CategoryComponent } from './component/category/category.component';
import { ListComponent } from './component/list/list.component';
import { CustomizeComponent } from './component/customize/customize.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { EndComponent } from './component/end/end.component';
import { CheckoutComponent } from './component/checkout/checkout.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pager', component: PaginationComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'list/:param', component: ListComponent },
    { path: 'customize/:param', component: CustomizeComponent },
    { path: 'confirm', component: ConfirmComponent },
    { path: 'end', component: EndComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
