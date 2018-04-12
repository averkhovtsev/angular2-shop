import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {ProductComponent} from "./product.component";

const routes: Routes = [

  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ':id',
        component: ProductViewComponent,
        outlet: 'product'
      }
    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}