import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {PostService} from "../../service/post.service";
import {Post} from "../../models/Post";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  posts: Post[];
  postsById: Post[];


  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postsById = this.posts.filter(el => el.userId === this.user.id)
  }

}
