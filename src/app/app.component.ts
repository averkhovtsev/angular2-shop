import {Component, Inject, Optional} from '@angular/core';
import {CartService} from "./cart/cart.service";
import {CONSTANTS, ConstantsService} from "./core/service/constants.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  application: string;
  version: string;
  today:number = Date.now();


  constructor(private cartService: CartService,
              @Inject(CONSTANTS) private CONSTANTS: ConstantsService) {
    this.application = CONSTANTS.Application;
    this.version = CONSTANTS.Version;
  }

  cartSize(): number {
    return this.cartService.size();
  }

}
