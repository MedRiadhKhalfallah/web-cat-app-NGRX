import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../model/product.model";
import {ActionEvent, ProductActionsTypes} from "../../../state/states";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

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
}
