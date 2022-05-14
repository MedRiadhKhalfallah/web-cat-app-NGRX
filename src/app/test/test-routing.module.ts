import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductEditComponent} from "../components/product-edit/product-edit.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {path: "", component: TestComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
