import {Injectable} from "@angular/core";
import {Product} from "../product/model/product";

@Injectable()
export class CartService {

  private products: Array<Product> = [];

  isEmpty(): boolean {
    return this.products.length === 0;
  }

  getAll(): Array<Product> {
    return this.products;
  }

  add(product: Product): void {
    this.products.push(product);
  }

  remove(product: Product): boolean {
    const i: number = this.products.findIndex(item => item.id === product.id);
    if (i > -1) {
      this.products.splice(i, 1);
      return true;
    } else {
      return false;
    }
  }

  clear(): void {
    this.products = [];
  }
}