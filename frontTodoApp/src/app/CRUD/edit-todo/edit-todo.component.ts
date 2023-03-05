import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/Model/todo';
import { TodoService } from 'src/app/Service/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  
  public idTodo!:number;
  public todo: Todo = new Todo();

  constructor(
    private todoService: TodoService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.idTodo = this.activatedRoute.snapshot.params['id'];
      this.todoService.getTodoById(this.idTodo).subscribe(data => {
      this.todo = data;
    }, error => console.log(error));
  }
  
  goTodoList() {
    this.router.navigate(['todos']);
  }

  updateTodo() {
    this.todoService.updateTodo(this.idTodo, this.todo).subscribe( data => {
      this.goTodoList();
  },
  error => console.log(error));
  }

  cancel() {
    this.router.navigate(['todos']);
  }

}
