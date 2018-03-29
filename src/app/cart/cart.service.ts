import {Injectable} from "@angular/core";
import {Item} from "./model/item.model";
import {Product} from "../product/model/product";
import {CartItem} from "./model/cart-item.model";

@Injectable()
export class CartService {

  private sum: (prev: number, curr: number) => number = (p, c) => p + c;
  private items: Array<Item> = [];

  constructor() {
  }

  size() : number {
    return this.items.length;
  }


  isEmpty(): boolean {
    return this.items.length === 0;
  }

  getAll(): Array<Item> {
    return this.items;
  }

  addProduct(product: Product, quantity: number = 1): void {
    const item: Item = this.getById(product.id);
    if (item) {
      item.quantity = item.quantity + quantity;
    } else {
      this.items.push(new CartItem(product.id, product.name, product.price, 1));
    }
  }

  getById(id: number): Item {
    return this.items.find(item => item.id === id);
  }

  remove(item: Item): boolean {
    const i: number = this.items.findIndex(i => i.id === item.id);
    if (i > -1) {
      this.items.splice(i, 1);
      return true;
    } else {
      return false;
    }
  }

  clear(): void {
    this.items = [];
  }

  getTotalPrice() : number {
    return this.items.map(i=> i.quantity * i.price).reduce(this.sum, 0);
  }
}