import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductModule} from "./product/product.module";
import {CartModule} from "./cart/cart.module";
import {FormsModule} from "@angular/forms";
import {HeaderModule} from "./header/header.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProductModule,
    CartModule,
      HeaderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
