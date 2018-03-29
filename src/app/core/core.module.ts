import {NgModule} from '@angular/core';
import {LocalStorageService} from "./service/local-storage.service";
import {ChangeBackgroundDirective} from "./directive/change-background.directive";
import {ChangeFontWeightDirective} from "./directive/change-font-weight.directive";
import {ConfigOptionsService} from "./service/config-options.service";


@NgModule({
  imports: [],
  declarations: [ChangeBackgroundDirective, ChangeFontWeightDirective],
  exports: [ChangeBackgroundDirective, ChangeFontWeightDirective],
  providers: [
    LocalStorageService
  ]
})
export class CoreModule {
}
