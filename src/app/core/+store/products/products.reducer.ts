import { ProductsActionTypes, ProductsActions } from './products.actions';
import {ProductsState, initialProductsState, productsAdapter} from './products.state';
import {Product} from "../../../product/model/product";


export function productsReducer(
    state = initialProductsState,
    action: ProductsActions
): ProductsState {
  console.log(`Reducer: Action came in! ${action.type}`);

  switch (action.type) {

    case ProductsActionTypes.GET_PRODUCTS: {
      return { ...state, loading: true };
    }

    case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
      const tasks = [...<Array<Product>>action.payload];
      return productsAdapter.addAll(tasks, {...state, loading: false, loaded: true});
    }


    case ProductsActionTypes.GET_PRODUCTS_ERROR: {
      const error = action.payload;
      return { ...state, loading: false, loaded: false, error };
    }

    case ProductsActionTypes.CREATE_PRODUCT_SUCCESS: {
      const task = { ...<Product>action.payload };
      return productsAdapter.addOne(task, state);
    }

    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
      const task = { ...<Product>action.payload };
      return productsAdapter.updateOne({ id: task.id, changes: task }, state);
    }

    case ProductsActionTypes.DELETE_PRODUCT_SUCCESS: {
      const task = { ...<Product>action.payload };
      return productsAdapter.removeOne(task.id, state);
    }

    case ProductsActionTypes.CREATE_PRODUCT_ERROR:
    case ProductsActionTypes.UPDATE_PRODUCT_ERROR:
    case ProductsActionTypes.DELETE_PRODUCT_ERROR: {
      const error = action.payload;
      return { ...state, error };
    }

    default: {
      return state;
    }
  }
} 

