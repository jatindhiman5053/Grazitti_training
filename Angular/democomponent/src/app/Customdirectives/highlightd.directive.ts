import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightd]'
})
export class HighlightdDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  OnMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, 'highlight-product');
  }

  @HostListener('mouseout')
  OnMouseOut() {
    this.renderer.removeClass(this.element.nativeElement, 'highlight-product');
  }


}
