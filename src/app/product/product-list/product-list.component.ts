import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/product";
import {PRODUCT_SERVICE, ProductService} from "../service/product.service";
import {CartService} from "../../cart/cart.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Promise<Array<Product>>;

  constructor(@Inject(PRODUCT_SERVICE) private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  onAddToCart(product: Product): void {
    if (product.isAvailable) {
      this.cartService.addProduct(product);
    }
  }

  onView(id: number): void {
    //this.router.navigate([{ outlets: { productview: ['productview'] } }]);
    // this.router.navigate([{outlets: {product: 'view'}}]);
    this.router.navigate([{outlets: {product: [id]}}], {relativeTo: this.route});
  }


}
