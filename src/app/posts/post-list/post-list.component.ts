import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// import {
//   MatAccordion,
//   MatAccordionDisplayMode,
//   MatExpansionModule,
// } from '@angular/material/expansion';

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
  @Input()
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
