import { Directive, ElementRef, HostListener } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Directive({
  selector: '[appStrikethrough]',
})
export class StrikethroughDirective {
  constructor(private elem: ElementRef) {}
  @HostListener('click') onClicks() {
    this.textDeco('line-through');
  }
  @HostListener('dbclick') onDoubleClick() {
    this.textDeco('none');
  }
  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }
}
