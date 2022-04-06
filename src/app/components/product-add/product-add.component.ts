import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../model/product.model";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {EventDriverService} from "../../services/event.driver.service";
import {ProductActionsTypes} from "../../state/states";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  public productFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductsService, private router: Router, private eventDriverService: EventDriverService) {
  }

  ngOnInit(): void {
    this.productFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required],
    });
  }

  onSaveProduct() {
    this.productService.saveProduct(this.productFormGroup.value).subscribe(
      data => {
        this.eventDriverService.publishEvent({type: ProductActionsTypes.PRODUCT_ADDED});
        this.router.navigateByUrl("/products");
      }
    )
  }
}
