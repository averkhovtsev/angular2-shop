import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductService} from "./product/service/product.service";
import {AppRoutingModule} from './app-routing.module';
import {CartComponent} from './cart/cart.component';
import {CartService} from "./cart/service/cart.service";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
