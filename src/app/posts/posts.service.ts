import { Post } from './post.model';
import { ContentChild, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() {}

  getPosts() {
    return [...this.posts];
  }

  getPostUpdatedListener() {
    let a = this.postsUpdated.asObservable();
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    const newPost: Post = {
      title: post.title,
      content: post.content,
      active: post.active,
    };
    this.posts.push(newPost);
    this.postsUpdated.next([...this.posts]);
  }
}
