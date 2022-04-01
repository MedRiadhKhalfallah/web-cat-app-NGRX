import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products?: Product[];

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.onGetAllProducts();
  }

  onGetAllProducts() {
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
      }
    );
  }

  onGetSelectedProducts() {
    this.productService.getSelectedProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
      }
    );
  }

}
