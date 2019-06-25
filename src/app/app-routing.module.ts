import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import {AddUserComponent} from './user/add-user/add-user.component'
import {EditUserComponent} from './user/edit-user/edit-user.component'
import {ListUserComponent} from './user/list-user/list-user.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-post',
    component: AddPostComponent
  },
  {
    path: 'edit-post',
    component: EditPostComponent
  },

  {
    path:'add-user',
    component: AddUserComponent
  },
  {
    path:'edit-user',
    component: EditUserComponent
  },
  {
    path:'list-user',
    component: ListUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
