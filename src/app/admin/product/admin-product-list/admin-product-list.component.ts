import {Component, Inject, OnInit} from '@angular/core';
import {PRODUCT_SERVICE, ProductService} from "../../../product/service/product.service";
import {Product} from "../../../product/model/product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  products: Array<Product>;

  constructor(@Inject(PRODUCT_SERVICE) private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.productService.getAll()
        .then(products => this.products = products);
  }

  onAdd() {
    this.router.navigate(['./add'], {relativeTo: this.route})
  }

  onRemove(product: Product) {
    this.productService.remove(product)
        .then(p => this.products.splice(this.getProductIndex(product), 1));
  }

  onUpdate(product: Product) {
    this.productService.update(product)
        .subscribe(
            (p: Product) => this.products[this.getProductIndex(p)] = p,
            err => console.log(err));
  }

  private getProductIndex(product: Product) {
    return this.products.findIndex(p => p.id === product.id);
  }

}
