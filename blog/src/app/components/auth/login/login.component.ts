import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from './../../../services/auth/login.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup
  isAuthenitcated: boolean=false;
  constructor(
    private loginservice:LoginService,
    // private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.myform=new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')

    })
  }

  get form(){
    return this.myform.controls;
  }
  onSubmit(){
    console.warn(this.myform.value)
    const data ={
      username: this.form.username.value,
      password: this.form.password.value,
    };
    this.loginservice.login(data).subscribe(
      (response) =>{
        this.router.navigate(['']);
        this.isAuthenitcated=true;
        console.log(response)
      },
      (error) =>{
        console.log(error)
        alert('Login unsuccessful');
      } 
    );
  }



}
