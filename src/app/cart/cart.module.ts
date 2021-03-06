import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {CartItemComponent} from './cart-item/cart-item.component';
import {CartService} from './cart.service';
import {CartListComponent} from "./cart-list/cart-list.component";
import {HeaderModule} from "../header/header.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule, FormsModule, SharedModule, HeaderModule
  ],
  declarations: [CartListComponent, CartItemComponent],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule {
}
