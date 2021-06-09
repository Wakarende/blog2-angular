import { FormGroup,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.myform=new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')

    })
  }

}
