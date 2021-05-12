import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentComponent } from './pages/coment/coment.component';
import { DetailComentComponent } from './pages/detail-coment/detail-coment.component';
import { DetailPhotoComponent } from './pages/detail-photo/detail-photo.component';
import { DetailTodoComponent } from './pages/detail-todo/detail-todo.component';
import { DetailUSerComponent } from './pages/detail-user/detail-user.component';
import { PhotoComponent } from './pages/photo/photo.component';
import { TodosComponent } from './pages/todos/todos.component';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [{
  path: "user", component: UsersComponent
},
{
  path: "photo", component: PhotoComponent
},
{
  path: "comment", component: ComentComponent
},
{
  path: "todo", component: TodosComponent
},
{
  path: "photo/:id", component: DetailPhotoComponent
},
{
  path: "comment/:id", component: DetailComentComponent
},
{
  path: "user/:id", component: DetailUSerComponent
},
{
  path: "todo/:id", component: DetailTodoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
