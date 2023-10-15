import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartEmptyComponent } from './cart-empty.component';

describe('CartEmptyComponent', () => {
  let component: CartEmptyComponent;
  let fixture: ComponentFixture<CartEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartEmptyComponent]
    });
    fixture = TestBed.createComponent(CartEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
