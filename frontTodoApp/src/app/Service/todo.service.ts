import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiURL : string = 'http://localhost:8085/api/todos';

  constructor(private httpTodo : HttpClient) { }

  getTodoById(idTodo:number): Observable<Todo> {
    return this.httpTodo.get<Todo>(`${this.apiURL}/${idTodo}`);
  }

  getTodoList() : Observable <Todo[]> {
    return this.httpTodo.get<Todo[]>(`${this.apiURL}`);
  }
}
