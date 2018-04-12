import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {FormsModule} from "@angular/forms";
import {CoreModule} from "../core/core.module";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminProductFormComponent} from './admin-product-form/admin-product-form.component';
import {AdminProductListComponent} from './admin-product-list/admin-product-list.component';
import {AdminProductComponent} from "./admin-product/admin-product.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminProductComponent, AdminProductFormComponent, AdminProductListComponent]
})
export class AdminModule {
}
