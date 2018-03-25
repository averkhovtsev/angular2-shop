import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductItemComponent} from './product-item/product-item.component';
import {ProductService} from './product.service';
import {ProductListComponent} from "./product-list/product-list.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductListComponent, ProductItemComponent],
  providers: [ProductService],
  exports: [ProductListComponent]
})
export class ProductModule {
}
