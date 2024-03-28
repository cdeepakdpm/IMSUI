import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userDetails: any ={
    userName: 'Deepak',
    passWord: '12345'
  }
loginObj: any ={
  userName: '',
  passWord: ''
}
onLogin()
{
  const isValid = (this.userDetails.userName == this.loginObj.userName) && (this.userDetails.passWord == this.loginObj.passWord)
  if(isValid == true)
  {
  alert("Login Successfull");
  }
  else
  {
    alert("Invalid User" + isValid);
  }
}
ngOnInit(): void {
  
}

}
