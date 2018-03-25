import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CartService} from "../cart.service";
import {Item} from "../model/item.model";
import {CartItemComponent} from "../cart-item/cart-item.component";

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, AfterViewInit {

  @ViewChildren(CartItemComponent) itemComponents: QueryList<CartItemComponent>;
  items: Array<Item>;
  totalItems: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.items = this.cartService.getAll();
  }

  ngAfterViewInit() {
    this.setTotalItems();
    this.itemComponents.changes.subscribe((r) => {
      this.setTotalItems();
    });
  }

  setTotalItems() {
    setTimeout(() => {
      this.totalItems = this.itemComponents.length;
    });
  }

  onClear(): void {
    this.cartService.clear();
  }

  isEmpty(): boolean {
    return this.cartService.isEmpty();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }


}
