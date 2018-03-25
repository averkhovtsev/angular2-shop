import {Category} from "./category";

export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  category: Category,
  isAvailable: boolean,
  stores?: string[]
}
