import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseenter') mouseenter(event: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'blue'
    );
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
