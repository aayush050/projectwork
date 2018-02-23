import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectworkService } from '../projectwork.service';

@Component({
  selector: 'app-login',
  template: `
  <div align="center">
 <h2> LOGIN</h2><br>
   <table border=1 height="200" width="400" >
   <div align="center" top-margin ="100">          
  <label align="center">Username</label><input type="text" [(ngModel)]="id" align="center"><br>
<label align="center">Password</label><input type= "password" [(ngModel)]="user" align="center"><br>
<button (click)="goToMenu();showname()"  type="submit"  >SUBMIT</button>
</div>
</table>
</div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
public id;
public user;
  constructor(private route:Router,private proservice: ProjectworkService) { }

  ngOnInit() {
  }
  showname()
  {
    if(this.id==this.user)
    {
      this.proservice.username=this.id;
    }
  }
goToMenu(user,pass)
{
  if(user==pass && user!='' && pass != '')
  {
   
   this.route.navigate(['/web/dashboard']);
  }
  else if( user=='' && pass == ''){
    window.alert("Please Fill The Username And Password");
  }
  else if( user==''){
   window.alert("Please Fill The Username");
 }
 else if(pass == ''){
   window.alert("Please Fill The Password");
 }
  
  else{
window.alert("Invalid Credentials");
}
}
}