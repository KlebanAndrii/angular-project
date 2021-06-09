import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from './components/users/users.component';
import {UserResolveService} from "./services/user-resolve.service";
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostResolveService} from "./services/post-resolve.service";

let routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    resolve: {data: UserResolveService},
    children: [{path: ':id', component: UserDetailsComponent}]
  },
  {
    path: 'posts',
    component: PostsComponent,
    resolve: {data: PostResolveService},
    children: [{path: ':id', component: PostDetailsComponent}]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent
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
