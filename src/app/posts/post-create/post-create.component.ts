import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredContent: string = '';
  enteredTitle: string = '';
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post: { title: string; content: string; active: boolean } = {
      title: this.enteredTitle,
      content: this.enteredContent,
      active: false,
    };
    this.postCreated.emit(post);
  }
}
