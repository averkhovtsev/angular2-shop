import {NgModule, Optional, SkipSelf} from '@angular/core';
import {ChangeBackgroundDirective} from "./directive/change-background.directive";
import {ChangeFontWeightDirective} from "./directive/change-font-weight.directive";
import {OrderByPipe} from "./pipe/order-by.pipe";
import { EnumToArrayPipe } from './pipe/enum-to-array.pipe';
import {LoginFormComponent} from "./login-form/login-form.component";
import {PathNotFoundComponent} from "./path-not-found/path-not-found.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChangeBackgroundDirective, ChangeFontWeightDirective, OrderByPipe, EnumToArrayPipe, PathNotFoundComponent, LoginFormComponent],
  exports: [ChangeBackgroundDirective, ChangeFontWeightDirective, OrderByPipe, EnumToArrayPipe, PathNotFoundComponent, LoginFormComponent],
  providers: []
})
export class SharedModule {

}
