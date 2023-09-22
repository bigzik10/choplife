import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveditemsComponent } from './saveditems.component';

describe('SaveditemsComponent', () => {
  let component: SaveditemsComponent;
  let fixture: ComponentFixture<SaveditemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveditemsComponent]
    });
    fixture = TestBed.createComponent(SaveditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
