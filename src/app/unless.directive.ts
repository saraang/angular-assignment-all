import { Directive, Input, TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(value: boolean) {
    if(!value){
      this.vcRef.createEmbeddedView(this.tamplateRef);
    }else{
      this.vcRef.clear();
    }
  } 

  constructor(private tamplateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}