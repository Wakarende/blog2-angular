import { BlogService } from './../../services/blogs/blog.service';
import { Blog } from './../../blog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blog: Blog = {
    title: '',
    description: '',
    body:'',
    published: false
  };
  submitted = false;

  constructor(private blogservice:BlogService) { }

  ngOnInit(): void {
  }

  saveBlog(): void {
    const data = {
      title: this.blog.title,
      description: this.blog.description
    };

    this.blogservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newBlog(): void {
    this.submitted = false;
    this.blog = {
      title: '',
      description: '',
      published: false
    };
  }

}

