import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLineDetailsComponent } from './component/product-line-details/product-line-details.component';
import { ProductCardDetailsComponent } from './component/product-card-details/product-card-details.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductOverviewComponent } from './component/product-overview/product-overview.component';



@NgModule({
  declarations: [
    ProductLineDetailsComponent,
    ProductCardDetailsComponent,
    ProductDetailsComponent,
    ProductOverviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
