import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectworkService } from '../projectwork.service';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-web',
  template: `
  <table border =0 width="100%" height="100%" fixed>
  <tr >
     <th class="logo" >
    <img width="100" src="https://www.seoclerk.com/pics/551103-1TOqFD1502285018.jpg">
    </th>
    <th class="username" width = "90%" colspan ="2"><p style="text-align:right">{{this.username}}</p></th>
  </tr>
  <tr>
     <td height="20" >
       <button (click)="gotoprofile()">PROFILE</button>
     </td>
    
     <td colspan ="2" rowspan="5" height="500" class="router" >
    <p style="text-align:center" >
      
    
     
     
       <router-outlet></router-outlet>
     
     </p>  
      
    
    </td>
                
  </tr>
  <tr>
    <td height="20"> <button (click)="gotoschool()">SCHOOL</button> </td>
  </tr>
  <tr>
    <td height="20"> <button (click)="gotocollege()">COLLEGE</button></td>
  </tr>
  <tr>
   <td height="20"><button (click)="gotodashboard()">DASHBOARD</button></td>
  </tr>
  <tr>
  <td></td>
  <tr>
  
  </table>  
  `,
  styles: [

    `

.router{ background-color:#602020}



.logo,.username{ background-color:white}



`

  ]





})
export class WebComponent implements OnInit {
  public username = '';

  constructor(private routerr: ActivatedRoute, private route: Router, private proservice: ProjectworkService) { }

  ngOnInit() {
    this.username = this.proservice.getdata();
  }

  gotoprofile() {
    this.route.navigate(['profile'], { relativeTo: this.routerr });
  }
  gotoschool() {
    this.route.navigate(['school'], { relativeTo: this.routerr });
  }
  gotocollege() {
    this.route.navigate(['college'], { relativeTo: this.routerr });
  }
  gotodashboard() {
    this.route.navigate(['dashboard'], { relativeTo: this.routerr });
  }
}
