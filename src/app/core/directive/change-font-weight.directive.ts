import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[change-font-weight]'
})
export class ChangeFontWeightDirective {

  @Input('change-font-weight') font: string;
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeFontWeight(this.font);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeFontWeight('normal');
  }

  private changeFontWeight(weight: string) {
    this.el.style['font-weight'] = weight;
  }
}
