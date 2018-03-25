import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {CartService} from "../../cart/cart.service";

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

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
