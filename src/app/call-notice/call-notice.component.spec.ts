import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallNoticeComponent } from './call-notice.component';

describe('CallNoticeComponent', () => {
  let component: CallNoticeComponent;
  let fixture: ComponentFixture<CallNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallNoticeComponent]
    });
    fixture = TestBed.createComponent(CallNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
