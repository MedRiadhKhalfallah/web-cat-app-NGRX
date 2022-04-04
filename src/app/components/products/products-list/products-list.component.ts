import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../../state/states";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsInput$?: Observable<AppDataState<Product[]>>;
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  readonly DataStateEnum = DataStateEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.productEventEmitter.emit({type: ProductActionsTypes.SELECT_PRODUCT, payload: product});
  }

  onUpdateSelected(product: Product) {
    this.productEventEmitter.emit({type: ProductActionsTypes.UPDATE_SELECTED_PRODUCT, payload: product});
  }

  onDeleteProduct(product: Product) {
    this.productEventEmitter.emit({type: ProductActionsTypes.DELETE_PRODUCT, payload: product});
  }

  onEditProduct(product: Product) {
    this.productEventEmitter.emit({type: ProductActionsTypes.EDIT_PRODUCT, payload: product});
  }

  onActionEvent($event: ActionEvent) {
    this.productEventEmitter.emit($event);
  }
}
