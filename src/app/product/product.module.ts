import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';

import {ProductItemComponent} from './product-item/product-item.component';
import {ProductService} from './product.service';
import {ProductListComponent} from "./product-list/product-list.component";
import {HeaderModule} from "../header/header.module";
import {CoreModule} from "../core/core.module";
import {ProductRoutingModule} from "./product-routing.module";
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    HeaderModule,

    ProductRoutingModule
  ],
  declarations: [ProductListComponent, ProductItemComponent, ProductViewComponent, ProductComponent],
  providers: [ProductService],
  exports: []
})
export class ProductModule {
}
