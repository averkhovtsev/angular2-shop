import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../product/model/product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  @Input() product: Product;
  @Output() remove = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onAvailable() {
    this.update.emit({ ...this.product, isAvailable: true });
  }

  onNotAvailable() {
    this.update.emit({ ...this.product, isAvailable: false });
  }

  onRemove() {
    this.remove.emit(this.product);
  }

  onEdit() {
    this.router.navigate(['./edit', this.product.id], {relativeTo: this.route})
  }
}
