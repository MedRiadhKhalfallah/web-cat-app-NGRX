export enum ProductActionsTypes {
  GET_ALL_PRODUCTS = "[Product] Get All Products",
  GET_SELECTED_PRODUCTS = "[Product] Get Selected Products",
  GET_AVAILABLE_PRODUCTS = "[Product] Get Available Products",
  SEARCH_PRODUCTS = "[Product] search Products",
  NEW_PRODUCTS = "[Product] New Products",
  SELECT_PRODUCT = "[Product] Select Product",
  UPDATE_SELECTED_PRODUCT = "[Product] Update Selected Product",
  DELETE_PRODUCT = "[Product] Delete Product",
  EDIT_PRODUCT = "[Product] Edit Product",
}

export interface ActionEvent {
  type?: string,
  payload?: any
}

export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T> {
  dataState?: DataStateEnum,
  data?: T,
  errorMessage?: string
}
