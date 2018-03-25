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

  getAll(): Array<Product> {
    return this.products;
  }

}