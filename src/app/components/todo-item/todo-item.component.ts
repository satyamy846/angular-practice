import { Component, inject, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodosDirective } from '../../directives/highlight-completed-todos.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodosDirective, UpperCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  /**
   * Emits the todo to the parent component when the todo is clicked.
   */
  todoClicked(){
    this.todoToggled.emit(this.todo());
  }
}
