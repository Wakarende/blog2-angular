import { CommentsService } from './../../services/blogs/comments.service';
import { Comment } from './../../interfaces/comment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  comment: Comment = {
    comment: '',
    published: false
  };
  submitted = false;



  constructor(private commentservice:CommentsService) { }

  ngOnInit(): void {
  }

  saveComment(): void {
    const data = {
      comment: this.comment.comment, 
    };

    this.commentservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newComment(): void {
    this.submitted = false;
    this.comment = {
      comment: '',
      published: false
    };
  }

}
