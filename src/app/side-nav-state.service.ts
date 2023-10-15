import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavStateService {
  private _showSideNav = false;

  get showSideNav(): boolean {
    return this._showSideNav;
  }

  set showSideNav(value: boolean) {
    this._showSideNav = value;
  }
}
