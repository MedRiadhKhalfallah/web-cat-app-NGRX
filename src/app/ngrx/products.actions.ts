import {Action} from "@ngrx/store";
import {Product} from "../model/product.model";

export enum ProductsActionsTypes {
  GET_ALL_PRODUCTS = "[Product] Get All Products",
  GET_ALL_PRODUCTS_SUCCESS = "[Product] Get All Products Success",
  GET_ALL_PRODUCTS_ERROR = "[Product] Get All Products Error",
// Get selected products
  GET_SELECTED_PRODUCTS = "[Product] Get Selected Products",
  GET_SELECTED_PRODUCTS_SUCCESS = "[Product] Get Selected Products Success",
  GET_SELECTED_PRODUCTS_ERROR = "[Product] Get Selected Products Error",
// Select product
  SELECT_PRODUCT = "[Product] Select Products",
  SELECT_PRODUCT_SUCCESS = "[Product] Select Product Success",
  SELECT_PRODUCT_ERROR = "[Product] Select Product Error",
}

export class GetAllProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;

  constructor(public payload: any) {
  }
}

export class GetAllProductsActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class GetAllProductsActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }
}

export class GetSelectedProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS;

  constructor(public payload: any) {
  }
}

export class GetSelectedProductsActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class GetSelectedProductsActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }
}
export class SelectProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class SelectProductActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class SelectProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

export type ProductsActions =
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError |
  GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
  ;
