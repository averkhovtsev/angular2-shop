import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminProductFormComponent, AdminProductListComponent} from "./product";
import {AdminGuard} from "../core/guard/admin.guard";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminProductListComponent
      },
      {
        path: 'add',
        component: AdminProductFormComponent,
      },
      {
        path: 'edit/:id',
        component: AdminProductFormComponent,
      },
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
export class AdminRoutingModule {
}