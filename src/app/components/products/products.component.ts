import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum} from "../../state/states";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products$?: Observable<AppDataState<Product[]>>;
  readonly DataStateEnum = DataStateEnum;

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.onGetAllProducts();
  }

  onGetAllProducts() {
    this.products$ = this.productService.getAllProducts().pipe(
      map((data) => ({dataState: DataStateEnum.LOADED, data: data}),
        startWith({dataState: DataStateEnum.LOADING})),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onGetSelectedProducts() {
    this.products$ = this.productService.getSelectedProducts().pipe(
      map((data) => ({dataState: DataStateEnum.LOADED, data: data}),
        startWith({dataState: DataStateEnum.LOADING})),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );

  }

  onSearch(dataForm: any) {
    this.products$ = this.productService.getSearchProducts(dataForm.keyword).pipe(
      map((data) => ({dataState: DataStateEnum.LOADED, data: data}),
        startWith({dataState: DataStateEnum.LOADING})),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );

  }

}
