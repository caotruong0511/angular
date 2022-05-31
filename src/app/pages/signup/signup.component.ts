import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:any
  constructor(private Ps:UserService,private router:Router) { }

  ngOnInit(): void {
    this.user={
      name:"",
      email:"",
      password:""
    }
  }

  onsubmit(){
   this.Ps.signup(this.user).subscribe(res=>{
     
   })
  }

}
