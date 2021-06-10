import { Comment } from './../../interfaces/comment';
import { CommentsService } from './../../services/blogs/comments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments?: Comment[];
  currentComment?:Comment;
  currentIndex = -1;
  comment='';

  constructor(private commentservice:CommentsService) { }

  ngOnInit(): void {
    this.retrieveComments();

  }

  retrieveComments(): void {
    this.commentservice.getAll()
      .subscribe(
        data => {
          this.comments = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveComments();
    this.currentComment= undefined;
    this.currentIndex = -1;
  }

  setActiveBlog(comment: Comment, index: number): void {
    this.currentComment = comment;
    this.currentIndex = index;
  }

  removeAllComments(): void {
    this.commentservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  // searchTitle(): void {
  //   this.blogservice.findByTitle(this.title)
  //     .subscribe(
  //       data => {
  //         this.blogs = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }




}
