import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product/product.service";
import {Product} from "../../product/model/product";

@Component({
  selector: 'admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  products: Promise<Array<Product>>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

}
