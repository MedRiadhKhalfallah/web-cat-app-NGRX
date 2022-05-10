import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ItemAddComponent } from './items/item-add/item-add.component';
import { ItemViewComponent } from './items/item-view/item-view.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemIndexComponent } from './items/item-index/item-index.component';
import { ItemSearchComponent } from './items/item-search/item-search.component';
import { ItemNavBarComponent } from './items/item-nav-bar/item-nav-bar.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {BrowserModule} from "@angular/platform-browser";
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ItemAddComponent,
    ItemViewComponent,
    ItemListComponent,
    ItemIndexComponent,
    ItemSearchComponent,
    ItemNavBarComponent
  ],
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    ListboxModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
