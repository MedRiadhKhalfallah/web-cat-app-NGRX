import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {ProductsComponent} from './components/products/products.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductAddComponent} from './components/product-add/product-add.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {ProductsNavBarComponent} from './components/products/products-nav-bar/products-nav-bar.component';
import {ProductsListComponent} from './components/products/products-list/products-list.component';
import {ProductItemComponent} from './components/products/product-item/product-item.component';
import {StatsComponent} from './components/stats/stats.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {productsReducer} from "./ngrx/products.reducer";
import {ProductsEffects} from "./ngrx/products.effects";
// import {AccordionModule} from 'primeng/accordion';
// import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductItemComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({prodState: productsReducer}),
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument(),
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
