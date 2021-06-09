import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  isSubmitting: boolean = false;
  authForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { 
    this.authForm=this.fb.group(
      {
        'email': '',
        'password': ''
      }
    );
    
  }

  
  ngOnInit(): void {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl());
      }
  });
  }

  submitForm() {
    this.isSubmitting = true;

    let credentials = this.authForm.value;
    console.log(credentials);
  }
}
