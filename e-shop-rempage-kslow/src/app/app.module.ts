import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from "./login/login.module";
import {CoreModule} from "./core/core.module";
import {ProductModule} from "./product/product.module";
import {RouterModule} from "@angular/router";
import {ProductOverviewComponent} from "./product/component/product-overview/product-overview.component";
import {SearchOverviewComponent} from "./search/component/search-overview/search-overview.component";
import {SearchModule} from "./search/search.module";
import {ShoppingCartModule} from "./shoppingcart/shopping-cart.module";
import {ShoppingCartOverviewComponent} from "./shoppingcart/component/shopping-cart-overview/shopping-cart-overview.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CoreModule,
    SearchModule,
    ShoppingCartModule.forRoot(),
    ProductModule.forRoot(),
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: ProductOverviewComponent},
      {path: 'search', component: SearchOverviewComponent},
      {path: 'shoppingcard', component: ShoppingCartOverviewComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
