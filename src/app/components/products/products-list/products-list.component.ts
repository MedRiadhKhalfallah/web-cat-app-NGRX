import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ProductsState, ProductsStateEnum} from "../../../ngrx/products.reducer";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  /*
    @Input() productsInput$?: Observable<AppDataState<Product[]>>;
  */
  readonly DataStateEnum = ProductsStateEnum;
  productsState$!: Observable<ProductsState>;

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    // prodState le nom de state dans le fichier app.module.ts
    this.productsState$ = this.store.pipe(
      map((state) => state.prodState)
    )
  }
}
