import { Component } from '@angular/core';
import { SideNavStateService } from '../side-nav-state.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  constructor(private sideNavStateService: SideNavStateService) {}

  get showSideNav(): boolean {
    return this.sideNavStateService.showSideNav;
  }
}

