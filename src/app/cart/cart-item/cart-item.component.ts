import {Component, Input, OnInit, Optional} from '@angular/core';
import {CartService} from "../cart.service";
import {Item} from "../model/item.model";
import {GeneratorService} from "../../core/service/generator.service";

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: Item;
  hash: string;

  constructor(private cartService: CartService,
              @Optional() private generatorService: GeneratorService) {
    this.hash = this.generatorService && this.generatorService.generate();
  }

  ngOnInit() {
  }

  onRemove(): void {
    this.cartService.remove(this.item);
  }

}
