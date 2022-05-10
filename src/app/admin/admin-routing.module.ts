import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemIndexComponent} from "./items/item-index/item-index.component";

const routes: Routes = [
  {path: "items", component: ItemIndexComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
