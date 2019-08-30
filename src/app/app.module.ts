import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { ListComponent } from './component/list/list.component';
import { CategoryComponent } from './component/category/category.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { CustomizeComponent } from './component/customize/customize.component';
import { EndComponent } from './component/end/end.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './module/material/material.module';
import { CheckoutComponent } from './component/checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginationComponent,
    ListComponent,
    CategoryComponent,
    ConfirmComponent,
    CustomizeComponent,
    EndComponent,
    CheckoutComponent
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
