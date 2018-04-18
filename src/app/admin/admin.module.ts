import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {FormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminProductFormComponent, AdminProductListComponent, AdminProductComponent} from './product';
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminProductComponent, AdminProductFormComponent, AdminProductListComponent]
})
export class AdminModule {
}
