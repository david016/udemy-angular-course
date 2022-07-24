import { Post } from './post.model';
import { ContentChild, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: Post[] }>(
        'http://localhost:3000/api/posts'
      )
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdatedListener() {
    let a = this.postsUpdated.asObservable();
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    const newPost: Post = {
      id: null,
      title: post.title,
      content: post.content,
      active: post.active,
    };
    this.posts.push(newPost);
    this.postsUpdated.next([...this.posts]);
  }
}
