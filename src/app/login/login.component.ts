import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectworkService } from '../projectwork.service';

@Component({
  selector: 'app-login',
  template: `
  <div align="center">
  <img width="100" src="https://www.seoclerk.com/pics/551103-1TOqFD1502285018.jpg">
    
 <h2> LOGIN</h2><br>
   <table border=0 height="200" width="400" >
   
<div align="center" top-margin ="100">          
<input type="text" [(ngModel)]="id" align="center"  placeholder="Enter Username"><br>
<input type= "password" [(ngModel)]="user" align="center"  placeholder="Enter Password"><br>
<br><button (click)="goToMenu();showname()"  type="submit"  >SUBMIT</button>
</div>

</table>
</div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  public id;
  public user;
  constructor(private route: Router, private proservice: ProjectworkService) { }

  ngOnInit() {
  }
  showname() {
    if (this.id == this.user) {
      this.proservice.username = this.id;
    }
  }
  goToMenu(user, pass) {
    if (user == pass && user != '' && pass != '') {

      this.route.navigate(['/web/dashboard']);
    }
    else if (user == '' && pass == '') {
      window.alert("Please Fill The Username And Password");
    }
    else if (user == '') {
      window.alert("Please Fill The Username");
    }
    else if (pass == '') {
      window.alert("Please Fill The Password");
    }

    else {
      window.alert("Invalid Credentials");
    }
  }
}