import { TestBed } from '@angular/core/testing';

import { SideNavStateService } from './side-nav-state.service';

describe('SideNavStateService', () => {
  let service: SideNavStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
