import {Item} from "./item.model";

export class CartItem implements Item {
  constructor(public id: number,
              public name: string,
              public price: number,
              public quantity: number) {
  }
}