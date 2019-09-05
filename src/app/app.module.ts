import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { ListComponent } from './component/list/list.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { CustomizeComponent } from './component/customize/customize.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './module/material/material.module';
import { SbmComponent } from './component/sbm/sbm.component';
import { MenuComponent } from './component/menu/menu.component';
import { MemberComponent } from './component/member/member.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ThankyouComponent } from './component/thankyou/thankyou.component';
import { TypeComponent } from './component/type/type.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginationComponent,
    ListComponent,
    ConfirmComponent,
    CustomizeComponent,
    SbmComponent,
    MenuComponent,
    MemberComponent,
    PaymentComponent,
    ThankyouComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
