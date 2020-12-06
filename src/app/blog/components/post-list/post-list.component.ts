import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Topic } from 'src/app/shared/models/topic';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  blogs: Topic[];
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
  ) { }

  ngOnInit(): void {
    this.listBlogs();
    this.loadRecentPosts();
    this.listComments(); // this is to publish the older comment from the server to the UI

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

  private listBlogs() {
    this.blogService.getTopicList().subscribe(data => {

      this.recentPosts = data.slice(0, 3);
      this.blogs = data;
    });
  }

  private loadRecentPosts() {
    this.blogService.getTopicList().subscribe(data => {

      this.recentPosts = data.slice(0, 4);

    });

  }

  // this is to post comments
  createComment() {
  // i want to get the id on the blog comment by the user inorder to store it in the respective place.
  // i am still thinking about the logic

  this.postComment.push(this.comment);

  this.comment = ''; // reset the form after subit
  }


  // get postComment
  listComments() {
    this.blogService.getCommentList().subscribe(data => {
      this.postComment.push(data);
    });
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
