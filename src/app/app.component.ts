import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  storedPosts: { title: string; content: string; active: boolean }[] = [];

  onPostAdded(post: { title: string; content: string; active: boolean }) {
    this.storedPosts.push(post);
  }
}
