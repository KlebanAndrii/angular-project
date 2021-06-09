import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './components/app/app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {UserDetailsFromStateComponent} from './components/user-details-from-state/user-details-from-state.component';
import {UserDetailsFromServerComponent} from './components/user-details-from-server/user-details-from-server.component';
import {UserResolveService} from "./services/user-resolve.service";

let routes: Routes = [
  {path: 'detailsFromState/:id', component: UserDetailsFromStateComponent},
  {path: 'userDetailsFromServer/:id', component: UserDetailsFromServerComponent, resolve: {data: UserResolveService}},
  {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsFromStateComponent,
    UserDetailsFromServerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
