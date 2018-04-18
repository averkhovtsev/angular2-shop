import {Component, Inject, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Category} from "../../../product/model/category";
import {Product} from "../../../product/model/product";
import {StoreProduct} from "../../../product/model/store.product";
import {ActivatedRoute, Params} from "@angular/router";
import {PRODUCT_SERVICE, ProductService} from "../../../product/service/product.service";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs/observable/of";

@Component({
  selector: 'admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {

  product: Product;
  categories: Category[];

  constructor(private route: ActivatedRoute,
              @Inject(PRODUCT_SERVICE) private productService: ProductService,
              private location: Location) {
    this.categories = Object.keys(Category).map(c => Category[c]);
  }

  ngOnInit() {
    this.product = new StoreProduct(null, '', '', null, null, null);

    this.route.paramMap
        .pipe(
            switchMap((params: Params) => params.get('id') ?
                this.productService.getById(+params.get('id')) :
                of(null))
        )
        .subscribe(
            (product:Product) => this.product = {...product},
            err => console.log(err)
        );
  }

  save() {
    this.productService.saveOrUpdate(this.product)
        .subscribe(
            product => this.back(),
            err => console.log(err)
        )
  }

  back() {
    this.location.back();
  }

}
