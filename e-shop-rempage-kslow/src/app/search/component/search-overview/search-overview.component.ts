import {Component, Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../product/services/product-service";
import {Observable} from "rxjs";
import {Product} from "../../../product/model/product";

@Component({
  selector: 'app-search-overview',
  templateUrl: './search-overview.component.html',
  styleUrls: ['./search-overview.component.scss']
})
@Injectable()
export class SearchOverviewComponent {
  searchTextGroup: FormGroup;
  private searchText: string = "";
  foundProducts: Observable<Product[]> | undefined;

  constructor(private productService: ProductService) {
    this.searchTextGroup = new FormGroup({
      search: new FormControl(this.searchText, Validators.required)
    })
  }

  search() {
      if (this.searchTextGroup.valid){
        this.searchText = this.searchTextGroup.get('search')?.value;
        this.foundProducts = this.productService.findAllBySimilarName(this.searchText)
      }
  }
}
