import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {Item} from "../model/item.model";

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  onRemove(): void {
    this.cartService.remove(this.item);
  }

}
