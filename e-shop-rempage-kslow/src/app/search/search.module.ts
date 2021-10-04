import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchOverviewComponent } from './component/search-overview/search-overview.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductModule} from "../product/product.module";



@NgModule({
  declarations: [
    SearchOverviewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductModule
  ]
})
export class SearchModule { }
