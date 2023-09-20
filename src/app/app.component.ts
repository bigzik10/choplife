import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';
import { SideNavStateService } from './side-nav-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'choplife';
  constructor(
    private sideNavStateService: SideNavStateService,
    private renderer: Renderer2,
    private el: ElementRef
    ) {}

    get showSideNav(): boolean {
      return this.sideNavStateService.showSideNav;
    }

    toggleSideNav() {
      this.sideNavStateService.showSideNav = !this.sideNavStateService.showSideNav;
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
      if (!this.el.nativeElement.contains(event.target)) {
        this.sideNavStateService.showSideNav = false;
      }
    }
    
}
