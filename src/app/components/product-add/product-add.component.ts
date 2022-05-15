import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {EventDriverService} from "../../services/event.driver.service";
import {ProductActionsTypes} from "../../state/states";
import {ProductsState, ProductsStateEnum} from "../../ngrx/products.reducer";
import {Store} from "@ngrx/store";
import {NewProductAction, SaveProductAction} from "../../ngrx/products.actions";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  public productFormGroup!: FormGroup;
  state: ProductsState | null = null;
  readonly productStateEnum = ProductsStateEnum;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductsService,
              private router: Router,
              private eventDriverService: EventDriverService,
              private store: Store<any>) {
  }

  ngOnInit(): void {
    // dans le cas ou on a besoin des donnees de la back pour le formulaire de creaction exp : select from backend
    this.store.dispatch(new NewProductAction({}));
    this.store.subscribe(
      state => {
        this.state = state.prodState;
        if (this.state?.dataState == ProductsStateEnum.NEW) {
          this.productFormGroup = this.formBuilder.group({
            name: ['', Validators.required],
            price: [0, Validators.required],
            quantity: [0, Validators.required],
            selected: [true, Validators.required],
            available: [true, Validators.required],
          });
        }
      }
    )
  }

  onSaveProduct() {
    this.store.dispatch(new SaveProductAction(this.productFormGroup.value));
    /*
        this.productService.saveProduct(this.productFormGroup.value).subscribe(
          data => {
            this.eventDriverService.publishEvent({type: ProductActionsTypes.PRODUCT_ADDED});
            this.router.navigateByUrl("/products");
          }
        )
    */
  }

  newProduct() {
    this.submitted=true;
    if (this.productFormGroup?.invalid) return;
    this.store.dispatch(new NewProductAction({}));
  }
}
