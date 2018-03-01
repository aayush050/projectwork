import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectworkService } from '../projectwork.service';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-web',
  template: `
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <body>
  
  <!-- Sidebar -->
  <div class="w3-sidebar w3-light-grey w3-bar-block" style="width:25%">
  <img class="left" src="https://www.seoclerk.com/pics/551103-1TOqFD1502285018.jpg" width="50" height="50"><br><br><br>
  
    <a (click)="gotoprofile()" class="w3-bar-item w3-button">Profile</a>
    <a (click)="gotoschool()" class="w3-bar-item w3-button">School</a>
    <a (click)="gotocollege()" class="w3-bar-item w3-button">College</a>
    <a (click)="gotodashboard()" class="w3-bar-item w3-button">Dashboard</a>
  </div>
  
  
  <div style="margin-left:25%">
  
  <div class="w3-container w3-teal">
  <h2 >{{this.username}}</h2>
    </div>
    <button class="button" (click)="logout()">Logout</button>
   
  
      <router-outlet></router-outlet>
    `,
    styles: [
      `.button{
        float:right;
      }
      h2
      {
  float:right;
      }
      .left{
        float:left;
      }
  
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
  logout()

{
  this.route.navigate(['/login']);
}}
