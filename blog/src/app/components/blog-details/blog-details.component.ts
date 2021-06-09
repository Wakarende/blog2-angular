import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from './../../blog';
import { BlogService } from './../../services/blogs/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  currentBlog: Blog = {
    title: '',
    description: '',
    body: '',
    published: false
  };
  message = '';
  constructor(
    private blogservice: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getBlog(this.route.snapshot.params.id);
  }

  getBlog(id: string): void {
    this.blogservice.get(id)
      .subscribe(
        data => {
          this.currentBlog = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentBlog.title,
      description: this.currentBlog.description,
      published: status
    };

    this.blogservice.update(this.currentBlog.id, data)
      .subscribe(
        response => {
          this.currentBlog.published = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateBlog(): void {
    this.blogservice.update(this.currentBlog.id, this.currentBlog)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteBlog(): void {
    this.blogservice.delete(this.currentBlog.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }
}

