import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private host = environment.host;

  constructor(private http: HttpClient) {

  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + "products");
  }

  getSelectedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + "products?selected=true");
  }

  getSearchProducts(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + "products?name_like="+keyword);
  }
}
