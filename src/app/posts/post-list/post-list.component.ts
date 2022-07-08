import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub!: Subscription;
  // @Input() posts: Post[] = [];
  postsService: PostsService;

  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }

  // * Same as above, withou creating variable
  // constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService
      .getPostUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  displayCollapsible(i: number) {
    this.posts[i].active = !this.posts[i].active;
  }
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-post-list',
//   templateUrl: './post-list.component.html',
//   styleUrls: ['./post-list.component.css'],
// })
// export class PostListComponent implements OnInit {
//   active: Array<boolean | null> = [];

//   posts: any = [
//     { title: 'First Post', content: "This is the first post's content" },
//     { title: 'Second Post', content: "This is the second post's content" },
//     { title: 'Third Post', content: "This is the third post's content" },
//   ];

//   constructor() {}

//   ngOnInit(): void {}

//   displayCollapsible(i: number) {
//     console.log('hello');
//     this.active[i] = !this.active;
//   }
// }
