import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/Model/todo';
import { TodoService } from 'src/app/Service/todo.service';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.scss']
})

export class DetailTodoComponent implements OnInit {

  todos: Todo[] = [];
  todo: Todo = new Todo();
  idTodo!:number;
  
  constructor(
    private todoService: TodoService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.idTodo = this.activatedRoute.snapshot.params['id'];
      this.todo = new Todo();
      this.todoService.getTodoById(this.idTodo).subscribe(data => {
      this.todo = data;
    })
  }

  cancel() {
    this.router.navigate(['todos']);
  }

}
