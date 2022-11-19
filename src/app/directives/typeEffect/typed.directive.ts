import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import Typed from 'typed.js' 

@Directive({
  selector: '[appTyped]'
})
export class TypedDirective implements OnInit {
  @Input() appTyped!:Array<string>;

  constructor(private el: ElementRef) { 
    // console.log(this.el.nativeElement);
  }

   ngOnInit(){
    const options = {
      typeSpeed: 100,
      backSpeed:100,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    }
    Object.assign(options, {strings:this.appTyped});

    const typed = new Typed(this.el.nativeElement,options);
   }
}