import {NgModule, Optional, SkipSelf} from '@angular/core';
import {LocalStorageService} from "./service/local-storage.service";
import {UserService} from "./service/user.service";
import {AdminGuard} from "./guard/admin.guard";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DefaultHeadersInterceptor} from "./interceptor/default-headers.interceptor";
import {TimingInterceptor} from "./interceptor/timing.interceptor";
import {AppSettingsService} from "./service/app-settings.service";
import {CoreStoreModule} from "./+store/core-store.module";


@NgModule({
  imports: [HttpClientModule, CoreStoreModule],
  declarations: [],
  exports: [],
  providers: [
    LocalStorageService, UserService, AdminGuard, AppSettingsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true,
    }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }

}
