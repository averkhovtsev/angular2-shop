import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CartComponent} from './cart/cart.component';
import {CartService} from "./cart/cart.service";
import {ProductModule} from "./product/product.module";


@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
