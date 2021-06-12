import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {UsersComponent} from "./users/users.component";

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  @ViewChild(UsersComponent)
  usersComponentChild: UsersComponent


  constructor() {

  }


  ngOnChanges(changes: SimpleChanges): void {

  }


  ngOnInit(): void {

  }


}
