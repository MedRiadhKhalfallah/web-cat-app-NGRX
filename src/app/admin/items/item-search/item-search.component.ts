import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SaveProductAction} from "../../../ngrx/products.actions";
import {Store} from "@ngrx/store";
import {SearchItemsAction} from "../../../ngrx/items/items.actions";

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {
  isLoading = false;
  public productSearchFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,private primengConfig: PrimeNGConfig,private store: Store<any>) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.productSearchFormGroup = this.formBuilder.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
    });

  }

  onSearchProduct() {
    this.store.dispatch(new SearchItemsAction(this.productSearchFormGroup.value));
  }
}
