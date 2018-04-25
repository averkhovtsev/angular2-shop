import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {environment} from "../../../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {routerReducers/*, RouterStateSerializerProvider*/} from "./router";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import { RouterEffects } from './router/router.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers),
    StoreRouterConnectingModule.forRoot(),

    EffectsModule.forRoot([RouterEffects]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    !environment.production ? StoreDevtoolsModule.instrument() : [],

  ],
  declarations: [],
  providers: [
    //RouterStateSerializerProvider,
  ]

})
export class CoreStoreModule { }
