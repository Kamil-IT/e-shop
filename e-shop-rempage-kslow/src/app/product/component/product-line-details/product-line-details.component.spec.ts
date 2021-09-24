import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLineDetailsComponent } from './product-line-details.component';

describe('ProductLineDetailsComponent', () => {
  let component: ProductLineDetailsComponent;
  let fixture: ComponentFixture<ProductLineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLineDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
