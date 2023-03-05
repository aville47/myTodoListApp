import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './CRUD/add-todo/add-todo.component';
import { DetailTodoComponent } from './CRUD/detail-todo/detail-todo.component';
import { EditTodoComponent } from './CRUD/edit-todo/edit-todo.component';
import { ListTodoComponent } from './CRUD/list-todo/list-todo.component';
import { HomeTodoComponent } from './Shared/home-todo/home-todo.component';

const routes: Routes = [
  { path: 'home', component: HomeTodoComponent},
  { path: 'todos', component: ListTodoComponent },
  { path: 'todo/:id', component: DetailTodoComponent },
  { path: 'add', component: AddTodoComponent},
  { path: "edit/:id", component : EditTodoComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }

  /*
  TODO Create an error path and an error component
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
