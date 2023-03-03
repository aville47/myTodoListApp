import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Model/todo';
import { TodoService } from 'src/app/Service/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {
  
  todos: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router) {}
  
  
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodoList().subscribe(data => {
      this.todos = data;
    })
  }

  goToDetailTodo(idTodo:number) {
    this.router.navigate(['todo', idTodo]);
  }

}
