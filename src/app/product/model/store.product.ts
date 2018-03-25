import {Product} from "./product";
import {Category} from "./category";

export class StoreProduct implements Product {

  constructor(public id: number,
              public name: string,
              public description: string,
              public price: number,
              public category: Category,
              public isAvailable: boolean,
              public stores?: string[]) {
  }
}