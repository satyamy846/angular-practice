import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodos]',
  standalone: true
})
export class HighlightCompletedTodosDirective {
  isCompleted = input(false);
  el = inject(ElementRef); //ElementRef is also angular service on which element we have apply this directive
  stylesEffect = effect(() =>{
    if(this.isCompleted()){
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d3f9d8';
      this.el.nativeElement.style.color = '#6c757d';
  
    }
    else{
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }
  })
  constructor() { }

}
