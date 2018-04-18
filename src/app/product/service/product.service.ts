import {Product} from "../model/product";
import {Observable} from "rxjs/Observable";
import {InjectionToken} from "@angular/core";

export const PRODUCT_SERVICE = new InjectionToken<ProductService>('ProductService');

export interface ProductService {

  getAll(): Promise<Array<Product>>;

  getById(id: number): Promise<Product>;

  remove(product: Product): Promise<Product>;

  saveOrUpdate(product: Product): Observable<Product>

  update(product: Product): Observable<Product>;

  save(product: Product): Observable<Product>;
}