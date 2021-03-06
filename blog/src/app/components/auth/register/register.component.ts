import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { RegisterService } from './../../../services/auth/register.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationform: FormGroup;

  constructor(
    private registerservice:RegisterService,
    // private route: ActivatedRoute, 
    private router: Router
    )
     { }

  ngOnInit(): void {
    this.registrationform= new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get f(){
    return this.registrationform.controls;
  }

  onSubmit(){
    const data={
      username: this.f.username.value,
      email: this.f.email.value,
      password: this.f.password.value,

    };
    this.registerservice.register(data).subscribe(
      (response) => {
        alert('Registration successful');
        this.router.navigate(['login']);
        console.log(response)
      },
      (error)=>{
        console.log(error)
        alert('Registration not successful')
      }
    );
  }

}
