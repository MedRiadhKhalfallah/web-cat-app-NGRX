import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductActionsTypes} from "../../state/states";
import {EventDriverService} from "../../services/event.driver.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public productFormGroup!: FormGroup;
  public productId!: number;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private productService: ProductsService, private router: Router, private eventDriverService: EventDriverService) {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(
      product => {
        this.productFormGroup = this.formBuilder.group({
          id: [product.id, Validators.required],
          name: [product.name, Validators.required],
          price: [product.price, Validators.required],
          quantity: [product.quantity, Validators.required],
          selected: [product.selected, Validators.required],
          available: [product.available, Validators.required],
        });
      })
  }

  onSaveProduct() {
    console.log(this.productFormGroup.value);
    this.productService.updateProduct(this.productFormGroup.value).subscribe(
      data => {
        this.eventDriverService.publishEvent({type: ProductActionsTypes.PRODUCT_UPDATED});
        this.router.navigateByUrl("/products");
      }
    )
  }

}
