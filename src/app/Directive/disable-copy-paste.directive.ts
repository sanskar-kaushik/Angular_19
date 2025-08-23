import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableCopyPaste]',
})
export class DisableCopyPasteDirective {
  constructor(private el: ElementRef) {}

  @HostListener('copy', ['$event'])
  oncopy(event: ClipboardEvent) {
    event?.preventDefault();
    alert("Copy is disabled");
  }
  @HostListener('paste', ['$event'])
  onpaste(event: ClipboardEvent) {
    event?.preventDefault();
    alert("Paste is disabled");
  }
}
