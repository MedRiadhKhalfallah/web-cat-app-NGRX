import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from "../../../state/states";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearch(value: any) {
    this.productEventEmitter.emit({type: ProductActionsTypes.SEARCH_PRODUCTS, payload: value});
  }

  onNewProduct() {
    this.productEventEmitter.emit({type: ProductActionsTypes.NEW_PRODUCTS});
  }

  onGetSelectedProducts() {
    this.productEventEmitter.emit({type: ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAllProducts() {
    this.productEventEmitter.emit({type: ProductActionsTypes.GET_ALL_PRODUCTS});
  }
}
