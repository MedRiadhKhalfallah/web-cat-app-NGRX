import {Product} from "../model/product.model";
import {ProductsActions, ProductsActionsTypes} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductsStateEnum {
  LOADING = "Loading",
  LOADED = "Loaded",
  ERROR = "error",
  INITIAL = "Initial",
  NEW = "New",
  UPDATED = "UPDATED",
  GET = "GET"
}

export interface ProductsState {
  products: Product[],
  errorMessage: string,
  dataState: ProductsStateEnum,
  currentProduct: Product | null,
  currentAction: ProductsActions | null,
}

const initState: ProductsState = {
  products: [],
  errorMessage: "",
  dataState: ProductsStateEnum.INITIAL,
  currentProduct: null,
  currentAction: null
}

export function productsReducer(state: ProductsState = initState, action: Action): ProductsState {
  switch (action.type) {
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.SELECT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
      let product: Product = (<ProductsActions>action).payload
      let listProducts = [...state.products];
      let data: Product[] = listProducts.map(p => p.id == product.id ? product : p);
      return {...state, products: data, dataState: ProductsStateEnum.LOADED, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.DELETE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.DELETE_PRODUCT_SUCCESS:
      let p: Product = (<ProductsActions>action).payload
      let listP = [...state.products];
      let indexP = state.products.indexOf(p);
      listP.splice(indexP, 1)
      return {...state, products: listP, dataState: ProductsStateEnum.LOADED, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.DELETE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.NEW_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.NEW_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.NEW, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.NEW_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.SAVE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.SAVE_PRODUCT_SUCCESS:
      let prods: Product[] = [...state.products];
      prods.push((<ProductsActions>action).payload);
      return {...state, dataState: ProductsStateEnum.LOADED, products: prods, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.SAVE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.EDIT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.EDIT_PRODUCT_SUCCESS:
      let editProduct: Product = (<ProductsActions>action).payload
      let editListProducts = [...state.products];
      let editData: Product[] = editListProducts.map(p => p.id == editProduct.id ? editProduct : p);
      return {...state, products: editData, dataState: ProductsStateEnum.UPDATED, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.EDIT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.GET_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.GET_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.GET, currentProduct: (<ProductsActions>action).payload, currentAction: <ProductsActions>action};
    case ProductsActionsTypes.GET_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action};
    default :
      return {...state};
  }
}
