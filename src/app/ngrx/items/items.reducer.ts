import {Action} from "@ngrx/store";
import {Item} from "../../model/item.model";
import {ItemsActions, ItemsActionsTypes} from "./items.actions";

export enum ItemsStateEnum {
  LOADING = "Loading",
  LOADED = "Loaded",
  ERROR = "error",
  INITIAL = "Initial",
  NEW = "New",
  EDIT = "Edit"
}

export interface ItemsState {
  products: Item[],
  errorMessage: string,
  dataState: ItemsStateEnum
}

const initState: ItemsState = {
  products: [],
  errorMessage: "",
  dataState: ItemsStateEnum.INITIAL
}

export function itemsReducer(state: ItemsState = initState, action: Action): ItemsState {
  switch (action.type) {
    case ItemsActionsTypes.SEARCH_ITEMS:
      return {...state, dataState: ItemsStateEnum.LOADING};
    case ItemsActionsTypes.SEARCH_ITEMS_SUCCESS:
      return {...state, dataState: ItemsStateEnum.LOADED, products: (<ItemsActions>action).payload};
    case ItemsActionsTypes.SEARCH_ITEMS_ERROR:
      return {...state, dataState: ItemsStateEnum.ERROR, errorMessage: (<ItemsActions>action).payload};
    default :
      return {...state};
  }
}
