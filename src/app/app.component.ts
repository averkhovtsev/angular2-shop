import {Component} from '@angular/core';
import {CartService} from "./cart/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  constructor(private cartService: CartService) {
  }

  cartSize() : number {
    return this.cartService.size();
  }

}
