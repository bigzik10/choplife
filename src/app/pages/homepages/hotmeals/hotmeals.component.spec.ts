import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotmealsComponent } from './hotmeals.component';

describe('HotmealsComponent', () => {
  let component: HotmealsComponent;
  let fixture: ComponentFixture<HotmealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotmealsComponent]
    });
    fixture = TestBed.createComponent(HotmealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
