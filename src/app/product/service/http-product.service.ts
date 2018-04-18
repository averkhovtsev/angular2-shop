import {Product} from "../model/product";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {ProductService} from "./product.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HttpProductService implements ProductService {

  private productsUrl: string = "http://localhost:3000/products";

  constructor(private http: HttpClient) {
  }

  getAll(): Promise<Array<Product>> {
    return this.http.get<Array<Product>>(this.productsUrl)
        .toPromise();
  }

  getById(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`)
        .toPromise();
  }

  remove(product: Product): Promise<Product> {
    return this.http.delete<Product>(`${this.productsUrl}/${product.id}`)
        .toPromise();
  }

  saveOrUpdate(product: Product): Observable<Product> {
    return product.id ? this.update(product) : this.save(product);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.productsUrl}/${product.id}`, JSON.stringify(product));
  }

  save(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.productsUrl}`, JSON.stringify(product));
  }
}