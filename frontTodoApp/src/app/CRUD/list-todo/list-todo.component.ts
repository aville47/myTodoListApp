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
  
  private todos: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router) {}
  
  
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodoList().subscribe(data => {
      this.todos = data;
    })
  }

  get todosNotCompleted () : Todo[] {
    return this.todos.filter(todo => !todo.isCompleted);
  }

  get todosCompleted() : Todo[] {
    return this.todos.filter(todo => todo.isCompleted);
  }

  get countTodos() : number {
    return this.todos.length;
  }

  get countCompleted() : number {
    return this.todosCompleted.length;
  }

  get isHidden() : boolean {
    return this.countCompleted === 0;
  }

  goToDetailTodo(idTodo:number) {
    this.router.navigate(['todo', idTodo]);
  }

  deleteTodo(id:number) {
    this.todoService.deleteTodo(id).subscribe(data => {
      console.log(data);
      this.todos = this.todos.filter(todo => {
        return todo.id != id;
      })
    })
  }

}
