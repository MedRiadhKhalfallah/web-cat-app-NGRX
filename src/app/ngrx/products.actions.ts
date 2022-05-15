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

// delete product
  DELETE_PRODUCT = "[Product] delete Products",
  DELETE_PRODUCT_SUCCESS = "[Product] delete Product Success",
  DELETE_PRODUCT_ERROR = "[Product] delete Product Error",

// new product
  NEW_PRODUCT = "[Product] new Products",
  NEW_PRODUCT_SUCCESS = "[Product] new Product Success",
  NEW_PRODUCT_ERROR = "[Product] new Product Error",
// edit product
  EDIT_PRODUCT = "[Product] Edit Products",
  EDIT_PRODUCT_SUCCESS = "[Product] Edit Product Success",
  EDIT_PRODUCT_ERROR = "[Product] Edit Product Error",
// save product
  SAVE_PRODUCT = "[Product] save Products",
  SAVE_PRODUCT_SUCCESS = "[Product] save Product Success",
  SAVE_PRODUCT_ERROR = "[Product] save Product Error",
// get product
  GET_PRODUCT = "[Product] GET Products",
  GET_PRODUCT_SUCCESS = "[Product] GET Product Success",
  GET_PRODUCT_ERROR = "[Product] GET Product Error",
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

export class DeleteProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class DeleteProductActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class DeleteProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

export class NewProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT;

  constructor(public payload: any) {
  }
}

export class NewProductActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT_SUCCESS;

  constructor(public payload: any) {
  }
}

export class NewProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

export class EditProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.EDIT_PRODUCT;

  constructor(public payload: any) {
  }
}

export class EditProductActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.EDIT_PRODUCT_SUCCESS;

  constructor(public payload: any) {
  }
}

export class EditProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.EDIT_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

export class SaveProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class SaveProductActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class SaveProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

export class GetProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_PRODUCT;

  constructor(public payload: number) {
  }
}

export class GetProductActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class GetProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

export type ProductsActions =
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError |
  GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError |
  SelectProductAction | SelectProductActionSuccess | SelectProductActionError |
  DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError |
  NewProductAction | NewProductActionSuccess | NewProductActionError |
  EditProductAction | EditProductActionSuccess | EditProductActionError |
  GetProductAction | GetProductActionSuccess | GetProductActionError |
  SaveProductAction | SaveProductActionSuccess | SaveProductActionError
  ;
