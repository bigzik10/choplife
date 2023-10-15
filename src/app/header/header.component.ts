import { Component } from '@angular/core';
import { SideNavStateService } from '../side-nav-state.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private sideNavStateService: SideNavStateService) {}
  searchBarActive = false;

  toggleSearchBar() {
    this.searchBarActive = !this.searchBarActive;
  }

  toggleSideNav() {
    this.sideNavStateService.showSideNav = !this.sideNavStateService.showSideNav;
  }
}
