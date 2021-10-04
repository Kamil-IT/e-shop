import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartOverviewComponent } from './component/shopping-cart-overview/shopping-cart-overview.component';
import {ShoppingCardService} from "./service/shopping-card-service";
import { ShoppingCartItemComponent } from './component/shopping-cart-item/shopping-cart-item.component';



@NgModule({
  declarations: [
    ShoppingCartOverviewComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ShoppingCartModule {
  static forRoot(): ModuleWithProviders<ShoppingCartModule> {
    return {
      ngModule: ShoppingCartModule,
      providers: [
        ShoppingCardService
      ]
    }
  }
}
