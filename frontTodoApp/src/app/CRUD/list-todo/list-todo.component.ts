import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Model/todo';
import { TodoService } from 'src/app/Service/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {
  
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}
  
  
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodoList().subscribe(data => {
      this.todos = data;
    })
  }

}
