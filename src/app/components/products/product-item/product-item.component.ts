import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../model/product.model";
import {ActionEvent, ProductActionsTypes} from "../../../state/states";
import {EventDriverService} from "../../../services/event.driver.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  constructor(private eventDriverService: EventDriverService) {
  }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.eventDriverService.publishEvent({type: ProductActionsTypes.SELECT_PRODUCT, payload: product});
  }

  onUpdateSelected(product: Product) {
    this.eventDriverService.publishEvent({type: ProductActionsTypes.UPDATE_SELECTED_PRODUCT, payload: product});

  }

  onDeleteProduct(product: Product) {
    this.eventDriverService.publishEvent({type: ProductActionsTypes.DELETE_PRODUCT, payload: product});

  }

  onEditProduct(product: Product) {
    this.eventDriverService.publishEvent({type: ProductActionsTypes.EDIT_PRODUCT, payload: product});

  }
}
