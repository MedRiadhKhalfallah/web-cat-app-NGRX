import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../model/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private host = environment.host;

  constructor(private http: HttpClient) {

  }

  getSearchItems(name: string, price: string): Observable<Item[]> {
    let url = '';
    if (name) {
      url = "name_like=" + name;
    }
    if (price) {
      if (url != '') {
        url += "&price_like=" + price;
      } else {
        url += "price_like=" + price;
      }
    }
    return this.http.get<Item[]>(this.host + "items?" + url);
  }

}
