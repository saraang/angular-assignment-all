import { Directive, 
        OnInit, 
        Renderer2, 
        ElementRef,
        HostListener,
        HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; 

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'blue', false, false);
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'blue', false, false);
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent', false, false);
    this.backgroundColor = 'transparent';
  }

}