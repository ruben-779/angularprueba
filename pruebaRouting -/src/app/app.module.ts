import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoComponent } from './pages/photo/photo.component';
import { UsersComponent } from './pages/users/users.component';
import { TodosComponent } from './pages/todos/todos.component';
import { ComentComponent } from './pages/coment/coment.component';
import { DetailPhotoComponent } from './pages/detail-photo/detail-photo.component';
import { DetailUSerComponent } from './pages/detail-user/detail-user.component';
import { DetailTodoComponent } from './pages/detail-todo/detail-todo.component';
import { DetailComentComponent } from './pages/detail-coment/detail-coment.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    UsersComponent,
    TodosComponent,
    ComentComponent,
    DetailPhotoComponent,
    DetailUSerComponent,
    DetailTodoComponent,
    DetailComentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
