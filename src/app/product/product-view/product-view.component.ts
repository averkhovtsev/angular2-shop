import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: Product;
  private sub: Subscription;


  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.productService.getById(+params['id']).then(p => this.product = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onClose() {
    this.router.navigate([{ outlets: null }], {relativeTo: this.route});
  }

}
