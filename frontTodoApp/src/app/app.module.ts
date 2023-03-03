import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodoComponent } from './CRUD/list-todo/list-todo.component';
import { DetailTodoComponent } from './CRUD/detail-todo/detail-todo.component';
import { AddTodoComponent } from './CRUD/add-todo/add-todo.component';
import { MenuTodoComponent } from './Shared/menu-todo/menu-todo.component';
import { EditTodoComponent } from './CRUD/edit-todo/edit-todo.component';
import { FooterTodoComponent } from './Shared/footer-todo/footer-todo.component';
import { HomeTodoComponent } from './Shared/home-todo/home-todo.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    DetailTodoComponent,
    AddTodoComponent,
    MenuTodoComponent,
    EditTodoComponent,
    FooterTodoComponent,
    HomeTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
