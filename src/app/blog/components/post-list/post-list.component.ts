import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Topic } from 'src/app/shared/models/topic';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // @Idrice: I saw this with Dollar Sign in your PDF see stocks$
  topics$: Observable<Topic[]>; // Get or set list of topic coming from server

  // @Idrice: Add a comments to each property
  blog: Topic;
  recentPosts: Topic[];
  sortOptions: SelectItem[];
  sortKey: SelectItem;
  sortOrder: number;
  showMenu = '';
  showSubMenu = '';
  display: boolean;

  sortField: string;
  addlike = 1;

  message: string;
  public unique: boolean;

  postComment = [];
  comment = 'Comment-works!';


  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.topics$ = this.blogService.getTopicList();
  }

  ngOnInit(): void {

    this.loadRecentPosts();

    this.sortOptions = [
      { label: 'Produits', value: '!price' },

      { label: 'Blogs', value: 'price' }
    ];
    this.sortKey = this.sortOptions[0];
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }


  // Take 4 topics as recent posts
  private loadRecentPosts() {
    this.blogService.getTopicList().subscribe(data => {
      this.recentPosts = data.slice(0, 4);
    });

  }

  // this is to post comments
  createComment() {
    this.postComment.push(this.comment);
    this.comment = '';
  }

  changeBlogLike() {
    this.blog.like += 1;
  }

  changeBlogUnlike() {
    this.blog.unlike += 1;
  }
  shareBlog() { }

  get unlike() { return this.changeBlogUnlike(); }
  get like() { return this.changeBlogLike(); }

}
