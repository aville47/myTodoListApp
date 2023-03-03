import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Model/todo';
import { TodoService } from 'src/app/Service/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  errors: string[] | undefined;
  todo: Todo = new Todo();

  constructor(public todoService: TodoService,
    public router: Router) {}

    ngOnInit(): void {
    }

    saveTodo() {
      this.errors = [];
      this.todoService.createTodo(this.todo)
      .subscribe(data => {
        this.router.navigate(['todos']);
      },
      error => {
        this.errors = error.error.errors;
      });
    }

    cancel() {
      this.router.navigate(['todos']);
    }

}
