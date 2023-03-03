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

  createTodo(todo : Todo): Observable<any> {
    return this.httpTodo.post(`${this.apiURL}`, todo);
  }

  updateTodo(idTodo:number, todo: Todo) : Observable<Object>{
    return this.httpTodo.put(`${this.apiURL}/${idTodo}`, todo);
  }

  deleteTodo(idTodo:number) : Observable<any> {
    return this.httpTodo.delete(`${this.apiURL}/${idTodo}`);
  }

}
