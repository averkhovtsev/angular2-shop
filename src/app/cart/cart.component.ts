import {Component, OnInit} from '@angular/core';
import {CartService} from "./service/cart.service";
import {Product} from "../product/model/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  productsInCart(): Array<Product> {
    return this.cartService.getAll();
  }

  onRemove(product: Product): void {
    this.cartService.remove(product);
  }

}
