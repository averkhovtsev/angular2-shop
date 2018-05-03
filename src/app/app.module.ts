import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductModule} from "./product/product.module";
import {CartModule} from "./cart/cart.module";
import {HeaderModule} from "./header/header.module";
import {ConfigOptionsService} from "./core/service/config-options.service";
import {CoreModule} from "./core/core.module";
import {CONSTANTS} from "./core/service/constants.service";
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {OrderModule} from "./order/order.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,

    SharedModule,
    CoreModule,

    CartModule,
    HeaderModule,
    ProductModule,
    OrderModule,

    AppRoutingModule,
  ],
  providers: [
    ConfigOptionsService,
    {provide: CONSTANTS, useValue: {Application: "The Real Computer Shop", Version: "1.0"}}
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
