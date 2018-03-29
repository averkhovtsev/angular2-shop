import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../model/product";
import {CHARACTERS_09, GeneratorService, GeneratorServiceFactory} from "../../core/service/generator.service";


@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [
      {provide: GeneratorService, useFactory: GeneratorServiceFactory(10, CHARACTERS_09)}
      ]
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  hash: string;

  constructor(private generatorService: GeneratorService) {
    this.hash = this.generatorService.generate();
  }

  ngOnInit() {
  }

  onBuy() {
    this.addToCart.emit(this.product);
  }

}
