import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {catchError, map} from "rxjs/operators";
import {ItemsService} from "../../services/items.service";
import {ItemsActions, ItemsActionsTypes, SearchItemsActionError, SearchItemsActionSuccess} from "./items.actions";

@Injectable()
export class ItemsEffects {
  constructor(private itemsService: ItemsService, private effectActions: Actions) {
  }

  searchItemsEffect: Observable<Action> = createEffect(
    () => {
      return this.effectActions.pipe(
        ofType(ItemsActionsTypes.SEARCH_ITEMS),
        mergeMap((action: ItemsActions) => {
          return this.itemsService.getSearchItems(action.payload.name, action.payload.price).pipe(
            map(items => {
              return new SearchItemsActionSuccess(items)
            }),
            catchError((err) => of(new SearchItemsActionError(err.message))))
        })
      )
    }
  )

}
