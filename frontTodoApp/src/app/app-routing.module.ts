import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailTodoComponent } from './CRUD/detail-todo/detail-todo.component';
import { ListTodoComponent } from './CRUD/list-todo/list-todo.component';

const routes: Routes = [

  { path: 'todos', component: ListTodoComponent },
  { path: 'todo/:id', component: DetailTodoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
