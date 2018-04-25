import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/product";
import {CartService} from "../../cart/cart.service";
import {AppState} from "../../core/+store/app.state";
import {select, Store} from "@ngrx/store";
import {GetProducts, getProductsData, getProductsError} from "../../core/+store/products";
import {Observable} from "rxjs/Observable";
import {Go} from "../../core/+store/router";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Array<Product>>;
  productsError$: Observable<any>;

  constructor(private store: Store<AppState>,
              private cartService: CartService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.dispatch(new GetProducts());

    this.products$ = this.store.pipe(select(getProductsData));
    this.productsError$ = this.store.pipe(select(getProductsError));
  }

  onAddToCart(product: Product): void {
    if (product.isAvailable) {
      this.cartService.addProduct(product);
    }
  }

  onView(id: number): void {
    this.store.dispatch(new Go({path: [{outlets: {product: [id]}}], extras: {relativeTo: this.route}}));
  }


}
