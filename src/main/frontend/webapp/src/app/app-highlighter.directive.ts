import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:no-unused-expression
  // tslint:disable-next-line:directive-selector
  selector: '[basicHighlighter]'
})
// tslint:disable-next-line:directive-class-suffix
export class BasicHighlighter implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    // tslint:disable-next-line:semicolon
    // tslint:disable-next-line:no-unused-expression
    this.elementRef.nativeElement.style.color = 'red';
  }
} 
