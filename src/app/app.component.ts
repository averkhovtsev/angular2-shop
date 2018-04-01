import {Component, Optional} from '@angular/core';
import {CartService} from "./cart/cart.service";
import {ConstantsService} from "./core/service/constants.service";

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
              private constantsService: ConstantsService) {
    this.application = this.constantsService.Application;
    this.version = this.constantsService.Version;
  }

  cartSize(): number {
    return this.cartService.size();
  }

}
