import {Component, Input, OnInit} from '@angular/core';
import {Product} from "./model/product";
import {CartService} from "../cart/service/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  onBuy() {
    console.log(`Bought ${this.product.name}`);
    this.cartService.add(this.product);
  }

}
