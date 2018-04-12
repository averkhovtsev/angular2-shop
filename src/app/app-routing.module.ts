import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartListComponent} from "./cart/cart-list/cart-list.component";
import {PathNotFoundComponent} from "./shared/path-not-found/path-not-found.component";
import {LoginFormComponent} from "./shared/login-form/login-form.component";
import {AdminGuard} from "./core/guard/admin.guard";

const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: 'products',
    loadChildren: 'app/product/product.module#ProductModule'
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PathNotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}