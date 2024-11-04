import { Component, inject, input, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService); // tries to inject the service
  todoItems = signal<Array<Todo>>([]);
  searchTerm = '';
  ngOnInit():void {
    console.log(this.todoService.getTodoItems());
    this.todoService.getTodoItems().pipe(
      catchError((err) =>{
        console.error(err);
        throw err;
      })
    ).subscribe((todos) => this.todoItems.set(todos));
  }

  updateTodoItem(todo: Todo) {
    this.todoItems.update((todos) =>{
      return todos.map((t) => {
        if(t.id === todo.id){
          return {
            ...t,
            completed: !todo.completed
          }
        }
        return t; 
      });
    })
  }
}
