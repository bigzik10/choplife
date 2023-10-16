import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTabComponent } from './vendor-tab.component';

describe('VendorTabComponent', () => {
  let component: VendorTabComponent;
  let fixture: ComponentFixture<VendorTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorTabComponent]
    });
    fixture = TestBed.createComponent(VendorTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
