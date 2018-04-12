import {Injectable} from "@angular/core";
import {StoreProduct} from "./model/store.product";
import {Product} from "./model/product";
import {Category} from "./model/category";

@Injectable()
export class ProductService {

  private products: Array<Product> = [
    new StoreProduct(1, 'Wireless Mouse', 'Bluetooth wireless super small mouse', 350, Category.MOUSE, true, []),
    new StoreProduct(2, 'Monitor 22', 'Samsung 22inch screen', 2500, Category.SCREEN, true, []),
    new StoreProduct(3, 'Monitor 20', 'LG 20inch screen', 2300, Category.SCREEN, false, []),
    new StoreProduct(4, 'Standard Keyboard', 'Logitech keyboard', 150, Category.KEYBOARD, true, []),
    new StoreProduct(5, 'Color Printer', 'M590 Printer', 1350, Category.PRINTER, true, []),
    new StoreProduct(6, 'HP ProBook', 'HP ProBook', 12000, Category.LAPTOP, true, ['Comfy', 'Eldorado', 'PSShop'])
  ];

  getAll(): Promise<Array<Product>> {
    return new Promise<Array<Product>>((resolve, reject) => setTimeout(() => resolve(this.products), 1000));
  }

  getById(id: number): Promise<Product> {
    return new Promise<Product>((resolve, reject) => setTimeout(() => resolve(this.products.find(p => p.id === id)), 500));
  }

  remove(product: Product): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const i: number = this.products.indexOf(product);
      if (i > -1) {
        this.products.splice(i, 1);
        resolve(true);
      } else {
        reject({code: 2, message: "Product not found."});
      }
    });
  }

  available(product: Product): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const i: number = this.products.indexOf(product);
      if (i > -1) {
        product.isAvailable = true;
        resolve(true);
      } else {
        reject({code: 2, message: "Product not found."});
      }
    });
  }

  notAvailable(product: Product) {
    return new Promise<boolean>((resolve, reject) => {
      const i: number = this.products.indexOf(product);
      if (i > -1) {
        product.isAvailable = false;
        resolve(true);
      } else {
        reject({code: 2, message: "Product not found."});
      }
    });
  }
}