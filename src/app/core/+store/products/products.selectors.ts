import {createFeatureSelector, createSelector} from '@ngrx/store';

import {productsAdapter, ProductsState} from './products.state';
import {getRouterState} from "../router";
import {Product} from "../../../product/model/product";
import {StoreProduct} from "../../../product/model/store.product";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

export const getProductsState = createFeatureSelector<ProductsState>('products');
export const getProductsError = createSelector(getProductsState, (state: ProductsState) => state.error);
export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) => state.loaded);

export const {
  selectEntities: getProductsEntities,
  selectAll: getProductsData
} = productsAdapter.getSelectors(getProductsState);


export const getSelectedProductByUrl = createSelector(
    getProductsEntities,
    getRouterState,
    (products, router): Product => {
      //TODO find out how to find ActivatedRoute
      const secondaryOutlet = findOutlet(router.state.root, 'product');
      const id = secondaryOutlet && secondaryOutlet.params['id'];
      if (id) {
        return products[id];
      } else {
        return new StoreProduct(null, '', '', null, null, null);
      }
    });

function findOutlet(snapshot:ActivatedRouteSnapshot, outlet: string): ActivatedRouteSnapshot  {
  for (let i=0; i< snapshot.children.length; i++) {
    let child = snapshot.children[i];
    if(child.outlet === outlet) {
      return child;
    }
    child = findOutlet(child, outlet);
    if (child) {
      return child;
    }
  }
  return null;
}
// this.sub = this.route.params.subscribe(params => {
//   this.productService.getById(+params['id']).then(p => this.product = p);
// });