import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {HomeComponent} from "./components/home/home.component";
import {ProductAddComponent} from "./components/product-add/product-add.component";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";

const routes: Routes = [
  {path: "products", component: ProductsComponent},
  {path: "", component: HomeComponent},
  {path: "newProduct", component: ProductAddComponent},
  {path: "editProduct/:id", component: ProductEditComponent},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(mod => mod.AdminModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module')
      .then(mod => mod.TestModule)
  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

