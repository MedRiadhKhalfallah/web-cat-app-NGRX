import {Action} from "@ngrx/store";
import {Item} from "../../model/item.model";

export enum ItemsActionsTypes {
  SEARCH_ITEMS = "[Items] Search items",
  SEARCH_ITEMS_SUCCESS = "[Items] Search items Success",
  SEARCH_ITEMS_ERROR = "[Items] Search items Error",
}

export class SearchItemsAction implements Action {
  type: ItemsActionsTypes = ItemsActionsTypes.SEARCH_ITEMS;
  constructor(public payload: any) {
  }
}

export class SearchItemsActionSuccess implements Action {
  type: ItemsActionsTypes = ItemsActionsTypes.SEARCH_ITEMS_SUCCESS;
  constructor(public payload: Item[]) {
  }
}

export class SearchItemsActionError implements Action {
  type: ItemsActionsTypes = ItemsActionsTypes.SEARCH_ITEMS_ERROR;
  constructor(public payload: string) {
  }
}



export type ItemsActions =
  SearchItemsAction | SearchItemsActionSuccess | SearchItemsActionError ;
