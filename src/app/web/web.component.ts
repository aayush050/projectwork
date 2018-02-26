import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectworkService } from '../projectwork.service';

@Component({
  selector: 'app-web',
  template: `
  <router-outlet></router-outlet>
<img src="https://www.seoclerk.com/pics/551103-1TOqFD1502285018.jpg" width="50" height="50">
<p align="right">{{this.username}}</p>
<button (click)="gotoprofile()" align="left">PROFILE</button><br>         
<button (click)="gotoschool()"  align="left">SCHOOL</button> <br>
<button (click)="gotocollege()"  align="left">COLLEGE</button><br>

    
  `,
  styles: []
})
export class WebComponent implements OnInit {
public username='';

  constructor(private routerr: ActivatedRoute, private route:Router,private proservice: ProjectworkService) { }

  ngOnInit() {
    this.username=this.proservice.getdata();
  }

gotoprofile()
{
  this.route.navigate(['profile'], {relativeTo: this.routerr});
}
gotoschool()
{
  this.route.navigate(['school'], {relativeTo: this.routerr});
}
gotocollege()
{
  this.route.navigate(['college'], {relativeTo: this.routerr});
}
}
