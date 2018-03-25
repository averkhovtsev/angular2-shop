import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {CartItemComponent} from './cart-item/cart-item.component';
import {CartService} from './cart.service';
import {CartListComponent} from "./cart-list/cart-list.component";
import {HeaderModule} from "../header/header.module";
import {ChangeBackgroundDirective} from "./change-background.directive";

@NgModule({
  imports: [
    CommonModule, FormsModule, HeaderModule
  ],
  declarations: [CartListComponent, CartItemComponent, ChangeBackgroundDirective],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule {
}
