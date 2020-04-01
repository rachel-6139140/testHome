import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginUnSucssess = false;
  password:string;
  name:string;
  constructor(private router: Router){}

  onLogin(userForm){
    console.log(userForm);
    if(userForm.name=="admin" && userForm.password == "admin")
    {
      this.router.navigate(["/secure"]);
    }
    else
      this.loginUnSucssess = true; 


  }
}
