import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {SharedModule} from "../shared/shared.module";
import {OrderFormComponent} from "./order-form/order-form.component";
import {OrderRoutingModule} from "./order-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,

    OrderRoutingModule
  ],
  declarations: [OrderFormComponent],
  providers: [],
  exports: []
})
export class OrderModule {
}
