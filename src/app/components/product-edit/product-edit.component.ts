import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductActionsTypes} from "../../state/states";
import {EventDriverService} from "../../services/event.driver.service";
import {ProductsState, ProductsStateEnum} from "../../ngrx/products.reducer";
import {Store} from "@ngrx/store";
import {EditProductAction, GetProductAction, NewProductAction, SaveProductAction} from "../../ngrx/products.actions";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public productId!: number;
  public productFormGroup!: FormGroup;
  state: ProductsState | null = null;
  readonly productStateEnum = ProductsStateEnum;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductsService,
              private router: Router,
              private eventDriverService: EventDriverService,
              private store: Store<any>,
              private activatedRoute: ActivatedRoute) {
    this.productId = this.activatedRoute.snapshot.params['id'];

  }

  ngOnInit(): void {
    // dans le cas ou on a besoin des donnees de la back pour le formulaire de creaction exp : select from backend
    this.store.dispatch(new GetProductAction(this.productId));
    this.store.subscribe(
      state => {
        this.state = state.prodState;
        let currentProduct=this.state?.currentProduct;
          this.productFormGroup = this.formBuilder.group({
            id: [currentProduct?.id, Validators.required],
            name: [currentProduct?.name, Validators.required],
            price: [currentProduct?.price, Validators.required],
            quantity: [currentProduct?.quantity, Validators.required],
            selected: [currentProduct?.selected, Validators.required],
            available: [currentProduct?.available, Validators.required],
          });
      }
    )
  }

  onEditProduct() {
    this.submitted=true;
    if (this.productFormGroup?.invalid) return;
    this.store.dispatch(new EditProductAction(this.productFormGroup.value));
  }

  okUpdate() {

  }
}
