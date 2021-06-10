import { CommentsService } from './../../services/blogs/comments.service';
import { Comment } from './../../interfaces/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  currentComment: Comment = {
    comment:'',
    published: false,
  };
  message = '';

  constructor(
    private commentservice: CommentsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getComment(this.route.snapshot.params.id);
  }

  getComment(id: string): void {
    this.commentservice.get(id)
      .subscribe(
        data => {
          this.currentComment= data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      comment: this.currentComment.comment,
      published: status
    };

    this.commentservice.update(this.currentComment.id, data)
      .subscribe(
        response => {
          this.currentComment.published = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateComment(): void {
    this.commentservice.update(this.currentComment.id, this.currentComment)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteComment(): void {
    this.commentservice.delete(this.currentComment.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['']);
        },
        error => {
          console.log(error);
        });
  }


}
