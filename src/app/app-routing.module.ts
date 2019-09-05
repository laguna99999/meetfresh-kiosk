import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { TypeComponent } from './component/type/type.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { MenuComponent } from './component/menu/menu.component';
import { ListComponent } from './component/list/list.component';
import { CustomizeComponent } from './component/customize/customize.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ThankyouComponent } from './component/thankyou/thankyou.component';
import { MemberComponent } from './component/member/member.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'type', component: TypeComponent },
    { path: 'pager', component: PaginationComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'list/:param', component: ListComponent },
    { path: 'customize/:param', component: CustomizeComponent },
    { path: 'confirm', component: ConfirmComponent },
    { path: 'member', component: MemberComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'thankyou', component: ThankyouComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
