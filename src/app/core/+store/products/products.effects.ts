import {Inject, Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ProductsActions from './products.actions';
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import {catchError, concatMap, map, pluck, switchMap} from "rxjs/operators";
import {Router} from "@angular/router"
import * as RouterActions from './../router/router.actions';
import {HttpProductService} from "../../../product/service/http-product.service";
import {Product} from "../../../product/model/product";
import {of} from "rxjs/observable/of";
import {PRODUCT_SERVICE, ProductService} from "../../../product/service/product.service";


@Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions,
              private router: Router,
              @Inject(PRODUCT_SERVICE) private productService: ProductService) {
    console.log('[PRODUCTS EFFECTS]');
  }

  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
      ofType<ProductsActions.GetProducts>(ProductsActions.ProductsActionTypes.GET_PRODUCTS),
      switchMap((action: ProductsActions.GetProducts) =>
          this.productService.getAll()
              .then(products => new ProductsActions.GetProductsSuccess(products))
              .catch(err => new ProductsActions.GetProductsError(err))
      )
  );

  @Effect()
  getProduct$: Observable<Action> = this.actions$.pipe(
      ofType<ProductsActions.GetProduct>(ProductsActions.ProductsActionTypes.GET_PRODUCT),
      pluck('payload'),
      switchMap(payload =>
          this.productService.getById(+payload)
              .then(product => new ProductsActions.GetProductSuccess(product))
              .catch(err => new ProductsActions.GetProductError(err))
      )
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
      ofType<ProductsActions.UpdateProduct>(ProductsActions.ProductsActionTypes.UPDATE_PRODUCT),
      pluck('payload'),
      concatMap((payload: Product) =>
          this.productService.update(payload).pipe(
              map(product => new ProductsActions.UpdateProductSuccess(product)),
              catchError(err => of(new ProductsActions.UpdateProductError(err))),
          )
      )
  );
  @Effect()
  createProduct$: Observable<Action> = this.actions$.pipe(
      ofType<ProductsActions.CreateProduct>(ProductsActions.ProductsActionTypes.CREATE_PRODUCT),
      pluck('payload'),
      concatMap((payload: Product) =>
          this.productService.save(payload).pipe(
              map(product => new ProductsActions.CreateProductSuccess(product)),
              catchError(err => of(new ProductsActions.CreateProductError(err)))
          )
      )
  );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
      ofType<ProductsActions.DeleteProduct>(ProductsActions.ProductsActionTypes.DELETE_PRODUCT),
      pluck('payload'),
      concatMap((payload: Product) =>
          this.productService.remove(payload)
              .then(() => new ProductsActions.DeleteProductSuccess(payload))
              .catch(err => new ProductsActions.DeleteProductError(err))
      )
  );

  @Effect()
  createUpdateProductSuccess$: Observable<Action> = this.actions$.pipe(
      ofType<ProductsActions.CreateProduct | ProductsActions.UpdateProduct>(
          ProductsActions.ProductsActionTypes.CREATE_PRODUCT_SUCCESS,
          ProductsActions.ProductsActionTypes.UPDATE_PRODUCT_SUCCESS
      ),
      map(action => new RouterActions.Back())
  );


}
