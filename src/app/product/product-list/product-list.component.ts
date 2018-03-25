import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../product.service";
import {CartService} from "../../cart/cart.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor(private productService: ProductService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  onAddToCart(product: Product): void {
    if (product.isAvailable) {
      this.cartService.addProduct(product);
    }
  }




}
