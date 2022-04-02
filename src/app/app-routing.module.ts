import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {HomeComponent} from "./components/home/home.component";
import {ProductAddComponent} from "./components/product-add/product-add.component";

const routes: Routes = [
  {path: "products", component: ProductsComponent},
  {path: "", component: HomeComponent},
  {path: "newProduct", component: ProductAddComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

