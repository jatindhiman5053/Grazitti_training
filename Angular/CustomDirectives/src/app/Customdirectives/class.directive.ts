import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private ele: ElementRef, private render: Renderer2) { }

  @Input('appClass') set display(value: object) {
    let entry = Object.entries(value)

    for (let index of entry) {
      let [className, condition] = index;
      if (condition) {
        this.render.addClass(this.ele.nativeElement, className)
      }
      //console.log(index[0],index[1]);
    }
    // console.log(entry);

  }

}
