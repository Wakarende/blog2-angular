import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogsListComponent } from './components/blogs-list/blogs-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { HomeComponent } from './components/home/home.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path: 'blogs', component: AddBlogComponent },
  { path: 'blogs/:id', component: BlogDetailsComponent },
  { path: 'blogs/update/:id', component: BlogDetailsComponent},
  { path: 'blog/delete/:id', component: BlogDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'comments/:id', component: CommentDetailComponent },
  { path: 'comments/update/:id', component: CommentDetailComponent },
  { path: 'comments/delete/:id', component: CommentDetailComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

