import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHightlight]'
})
export class BasicHightlightDirective implements OnInit {
  constructor(private elementRef: ElementRef){

  }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}