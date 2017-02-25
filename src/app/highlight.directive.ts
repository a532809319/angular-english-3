import {Directive, HostListener,HostBinding,Input,ElementRef, Renderer, asNativeElements} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
@HostListener('mouseenter') mouseover(){
      this.backgroundColor=this.hightightColor
}
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor=this.defaultColor
   // alert(1)
  }
@HostBinding('style.backgroundColor') get  setColor(){
  return this.backgroundColor;
}
@Input() defaultColor='white';
@Input() hightightColor ='green';

private backgroundColor=this.defaultColor;
  constructor() {
   // this.elmentRef.nativeElement.style.background='black';
   // this.elmentRef.nativeElement.style.border='5px  solid green`  ';
    //this.rederer.setElementStyle(this.elmentRef.nativeElement,'background','yellow')

  }
  ngOnInit(){
    this.backgroundColor=this.defaultColor;
  }

}
