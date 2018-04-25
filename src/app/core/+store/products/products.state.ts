import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Product} from "../../../product/model/product";

export interface ProductsState extends EntityState<Product> {
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const productsAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialProductsState: ProductsState = productsAdapter.getInitialState({
  loading: false,
  loaded: false,
  error: null
});
