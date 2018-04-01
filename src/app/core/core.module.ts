import {NgModule} from '@angular/core';
import {LocalStorageService} from "./service/local-storage.service";
import {ChangeBackgroundDirective} from "./directive/change-background.directive";
import {ChangeFontWeightDirective} from "./directive/change-font-weight.directive";
import {OrderByPipe} from "./pipe/order-by.pipe";


@NgModule({
  imports: [],
  declarations: [ChangeBackgroundDirective, ChangeFontWeightDirective, OrderByPipe],
  exports: [ChangeBackgroundDirective, ChangeFontWeightDirective, OrderByPipe],
  providers: [
    LocalStorageService
  ]
})
export class CoreModule {
}
