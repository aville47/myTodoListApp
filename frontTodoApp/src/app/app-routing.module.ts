import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTodoComponent } from './CRUD/list-todo/list-todo.component';

const routes: Routes = [

  { path: 'todos', component: ListTodoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
