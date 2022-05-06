import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  GetAllProductsActionError,
  GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess,
  ProductsActions,
  ProductsActionsTypes, SelectProductActionError, SelectProductActionSuccess
} from "./products.actions";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class ProductsEffects {
  constructor(private productsService: ProductsService, private effectActions: Actions) {
  }

  getAllProductsEffect: Observable<Action> = createEffect(
    () => {
      return this.effectActions.pipe(
        ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
        mergeMap((action: ProductsActions) => {
          return this.productsService.getAllProducts().pipe(
            map(products => {
              return new GetAllProductsActionSuccess(products)
            }),
            catchError((err) => of(new GetAllProductsActionError(err.message))))
        })
      )
    }
  )
  getSelectedProductsEffect: Observable<Action> = createEffect(
    () => {
      return this.effectActions.pipe(
        ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
        mergeMap((action: ProductsActions) => {
          return this.productsService.getSelectedProducts().pipe(
            map(products => {
              return new GetSelectedProductsActionSuccess(products)
            }),
            catchError((err) => of(new GetSelectedProductsActionError(err.message))))
        })
      )
    }
  )

  selectProductEffect: Observable<Action> = createEffect(
    () => {
      return this.effectActions.pipe(
        ofType(ProductsActionsTypes.SELECT_PRODUCT),
        mergeMap((action: ProductsActions) => {
          return this.productsService.updateSelected(action.payload).pipe(
            map(product => {
              return new SelectProductActionSuccess(product)
            }),
            catchError((err) => of(new SelectProductActionError(err.message))))
        })
      )
    }
  )

}
