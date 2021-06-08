import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../models/User";
import {PostService} from "../../service/post.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  posts: Post[];

  constructor(private userService: UserService, private postService: PostService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.users = value

    })
    this.postService.getPosts().subscribe(value => {
      this.posts = value
    })
  }

}
