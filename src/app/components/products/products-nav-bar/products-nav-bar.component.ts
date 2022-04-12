import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from "../../../state/states";
import {EventDriverService} from "../../../services/event.driver.service";
import {Store} from "@ngrx/store";
import {GetAllProductsAction, GetSelectedProductsAction} from "../../../ngrx/products.actions";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private eventDriverService: EventDriverService, private store: Store<any>) {
  }

  ngOnInit(): void {
  }

  onSearch(value: any) {
    this.eventDriverService.publishEvent({type: ProductActionsTypes.SEARCH_PRODUCTS, payload: value});
  }

  onNewProduct() {
    this.eventDriverService.publishEvent({type: ProductActionsTypes.NEW_PRODUCTS});
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
