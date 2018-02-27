import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectworkService } from '../projectwork.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-dashboard',
  template: `
<p *ngIf="data.name !=''" class="butto" >
<label align="center">My Name    :</label>{{data.name}}<br>
<label align="center">Age        :</label>{{data.age}}<br>
</p>

 <br><br>

  <p  class="button" >
     <button *ngIf="data.name ==''" type="submit" (click)="gotonewprofile()">ADD MY DETAILS</button>
    </p>
  `,
  styles: [
    `
      .button{
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -50px;
        margin-left: -100px;
        
  }
  .butto{
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -100px;
  `
  ]
})
export class DashboardComponent implements OnInit {

  public data;
  constructor(private route: Router, private proservice: ProjectworkService, private profservice: ProfileService) { }

  ngOnInit() {
    this.data = this.profservice.profile;
  }


  gotonewprofile() {

    this.route.navigate(['/web/profile']);


  }
 
}

