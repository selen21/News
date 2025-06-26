import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appHighlight]' })

export class HighlightDirective {
  constructor(private el: ElementRef) {}

    @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.backgroundColor = '#f2f2f2';
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}

