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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  active: boolean = false;

  posts: any = [
    { title: 'First Post', content: "This is the first post's content" },
    { title: 'Second Post', content: "This is the second post's content" },
    { title: 'Third Post', content: "This is the third post's content" },
  ];

  constructor() {}

  ngOnInit(): void {}

  displayCollapsible(i: number) {
    console.log('hello');
    this.active = !this.active;
  }
}
