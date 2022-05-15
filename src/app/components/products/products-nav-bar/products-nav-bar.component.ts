import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from "../../../state/states";
import {EventDriverService} from "../../../services/event.driver.service";
import {Store} from "@ngrx/store";
import {GetAllProductsAction, GetSelectedProductsAction, ProductsActionsTypes} from "../../../ngrx/products.actions";
import {Router} from "@angular/router";
import {ProductsState, ProductsStateEnum} from "../../../ngrx/products.reducer";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  state!: ProductsState;
  readonly ProductsActionsTypes=ProductsActionsTypes;
  constructor(private eventDriverService: EventDriverService, private store: Store<any>,
              private router: Router) {
  }

  ngOnInit(): void {
    this.store.subscribe(
      state => {
        this.state = state.prodState;
      }
    )
  }

  onSearch(value: any) {
    this.eventDriverService.publishEvent({type: ProductActionsTypes.SEARCH_PRODUCTS, payload: value});
  }

  onNewProduct() {
    // this.eventDriverService.publishEvent({type: ProductActionsTypes.NEW_PRODUCTS});
    this.router.navigateByUrl("/newProduct");
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}))

    // this.eventDriverService.publishEvent({type: ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}))
    // this.eventDriverService.publishEvent({type: ProductActionsTypes.GET_ALL_PRODUCTS});
  }
}
