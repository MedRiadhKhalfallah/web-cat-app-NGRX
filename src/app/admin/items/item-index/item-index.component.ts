import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItemGroup } from "primeng/api";

interface Country {
  name: string,
  code: string
}

@Component({
  selector: 'app-item-index',
  templateUrl: './item-index.component.html',
  styleUrls: ['./item-index.component.css']
})


export class ItemIndexComponent implements OnInit {

  countries: Country[];

  selectedCountries?: Country[];

  constructor() {
    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
    ];
  }

  ngOnInit(): void {
  }

}
