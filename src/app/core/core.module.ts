import {NgModule, Optional, SkipSelf} from '@angular/core';
import {LocalStorageService} from "./service/local-storage.service";
import {ChangeBackgroundDirective} from "./directive/change-background.directive";
import {ChangeFontWeightDirective} from "./directive/change-font-weight.directive";
import {OrderByPipe} from "./pipe/order-by.pipe";
import {UserService} from "./service/user.service";
import {AdminGuard} from "./guard/admin.guard";


@NgModule({
  imports: [],
  declarations: [ChangeBackgroundDirective, ChangeFontWeightDirective, OrderByPipe],
  exports: [ChangeBackgroundDirective, ChangeFontWeightDirective, OrderByPipe],
  providers: [
    LocalStorageService, UserService, AdminGuard
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }

}
