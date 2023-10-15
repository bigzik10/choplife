import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  constructor(private ElementRef: ElementRef) { }

  @Output () appClickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  onClick(target: any): void {
    const clickInside = this.ElementRef.nativeElement.contains(target);
  if (!clickInside) {
    this.appClickOutside.emit();
  }
  }

}
