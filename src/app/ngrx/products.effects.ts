import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  DeleteProductActionError,
  DeleteProductActionSuccess, EditProductActionError, EditProductActionSuccess,
  GetAllProductsActionError,
  GetAllProductsActionSuccess, GetProductActionError, GetProductActionSuccess,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess,
  NewProductActionSuccess,
  ProductsActions,
  ProductsActionsTypes, SaveProductActionError, SaveProductActionSuccess,
  SelectProductActionError,
  SelectProductActionSuccess
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
  deleteProductEffect: Observable<Action> = createEffect(
    () => {
      return this.effectActions.pipe(
        ofType(ProductsActionsTypes.DELETE_PRODUCT),
        mergeMap((action: ProductsActions) => {
          return this.productsService.deleteSelected(action.payload).pipe(
            map(() => {
              return new DeleteProductActionSuccess(action.payload)
            }),
            catchError((err) => of(new DeleteProductActionError(err.message))))
        })
      )
    }
  )
  newProductEffect: Observable<Action> = createEffect(
    () => {
      return this.effectActions.pipe(
        ofType(ProductsActionsTypes.NEW_PRODUCT),
        map((action: ProductsActions) => {
          return new NewProductActionSuccess({});
        })
      )
    }
  )
  saveProductEffect: Observable<Action> = createEffect(
    () => {
      return this.effectActions.pipe(
        ofType(ProductsActionsTypes.SAVE_PRODUCT),
        mergeMap((action: ProductsActions) => {
          return this.productsService.saveProduct(action.payload).pipe(
            map((product) => {
              return new SaveProductActionSuccess(product)
            }),
            catchError((err) => of(new SaveProductActionError(err.message))))
        })
      )
    }
  )
  editProductEffect: Observable<Action> = createEffect(
    () => {
      return this.effectActions.pipe(
        ofType(ProductsActionsTypes.EDIT_PRODUCT),
        mergeMap((action: ProductsActions) => {
          return this.productsService.updateProduct(action.payload).pipe(
            map((product) => {
              return new EditProductActionSuccess(product)
            }),
            catchError((err) => of(new EditProductActionError(err.message))))
        })
      )
    }
  )
  getProductByIdEffect: Observable<Action> = createEffect(
    () => {
      return this.effectActions.pipe(
        ofType(ProductsActionsTypes.GET_PRODUCT),
        mergeMap((action: ProductsActions) => {
          return this.productsService.getProduct(action.payload).pipe(
            map((product) => {
              return new GetProductActionSuccess(product)
            }),
            catchError((err) => of(new GetProductActionError(err.message))))
        })
      )
    }
  )

}
