import { Component } from '@angular/core';
import { SideNavStateService } from '../side-nav-state.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private sideNavStateService: SideNavStateService) {}
  searchBarActive = false;

  // get started modal
  getStartedModal = false;
  selectedTab: string = 'user';

  // Method to switch between tabs
  showTab(tab: string) {
    this.selectedTab = tab;
  }

  toggleSearchBar() {
    this.searchBarActive = !this.searchBarActive;
  }

  toggleSideNav() {
    this.sideNavStateService.showSideNav =
      !this.sideNavStateService.showSideNav;
  }

  // get started modal
  // Method to open the "Add Item" modal
  openGetStartedModal() {
    this.getStartedModal = true;
  }

  // Method to close the "Add Item" modal
  closeGetStartedModal() {
    this.getStartedModal = false;
  }
}
