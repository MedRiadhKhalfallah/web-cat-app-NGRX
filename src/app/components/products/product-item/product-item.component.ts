import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product.model";
import {ProductActionsTypes} from "../../../state/states";
import {EventDriverService} from "../../../services/event.driver.service";
import {Store} from "@ngrx/store";
import {DeleteProductAction, SelectProductAction} from "../../../ngrx/products.actions";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;

  constructor(private eventDriverService: EventDriverService, private store: Store) {
  }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.eventDriverService.publishEvent({type: ProductActionsTypes.SELECT_PRODUCT, payload: product});
  }

  onUpdateSelected(product: Product) {
    // this.eventDriverService.publishEvent({type: ProductActionsTypes.UPDATE_SELECTED_PRODUCT, payload: product});
    this.store.dispatch(new SelectProductAction(product));


  }

  onDeleteProduct(product: Product) {
    // this.eventDriverService.publishEvent({type: ProductActionsTypes.DELETE_PRODUCT, payload: product});
    this.store.dispatch(new DeleteProductAction(product));

  }

  onEditProduct(product: Product) {
    this.eventDriverService.publishEvent({type: ProductActionsTypes.EDIT_PRODUCT, payload: product});

  }
}
