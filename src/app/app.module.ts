import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {RouterModule, Routes} from "@angular/router";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {DeactivateService} from "./service/deactivate.service";
import { CommentsComponent } from './components/comments/comments.component';
import {ResolveService} from "./service/resolve.service";



let routes: Routes = [
  {path: 'users', component: UsersComponent, children: [{path: ':id', component: UserDetailsComponent}]},
  {path: 'posts', component: PostsComponent, canDeactivate: [DeactivateService]},
  {path: 'posts/:id', component: PostDetailsComponent, canActivate: [DeactivateService]},
  {path: 'comments', component: CommentsComponent, resolve: {data: ResolveService}}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentsComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
