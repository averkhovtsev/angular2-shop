import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Directive({
  selector: '[change-background]'
})
export class ChangeBackgroundDirective implements OnInit {

  @HostBinding('style.background-color') backgroundColor;
  @Input("change-background") color: string;

  private sanitizer;
  private safeStyle: SafeStyle;
  private defStyle: SafeStyle;

  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.safeStyle = this.sanitizer.bypassSecurityTrustStyle(this.color);
    this.defStyle = this.sanitizer.bypassSecurityTrustStyle('white');
  }

  @HostListener('mouseenter')
  onMouseenter() {
      this.backgroundColor = this.safeStyle;
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.backgroundColor = this.defStyle;
  }

}
