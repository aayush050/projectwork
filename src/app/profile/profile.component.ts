import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  template: `
  <p class="button" *ngIf="end">
  <label align="center">My Name    :</label>{{this.name}}<br>
  <label align="center">Age        :</label>{{this.age}}<br>
  <label align="center">Father's Name    :</label>{{this.fname}}<br>
  <label align="center">Mother's Name       :</label>{{this.mname}}<br>
  </p>
  
<div class="button" *ngIf="start">
<label align="center">MyName</label><input type="text" [(ngModel)]="name" align="center" placeholder="Enter Your Name" ><br>
<label align="center">MyAge</label><input type="number" [(ngModel)]="age" align="center" placeholder="Enter Your Age"><br>
<label align="center">Father's Name</label><input type="text" [(ngModel)]="fname" align="center" placeholder="Enter Your Father's Name"><br>
<label align="center">Mother's Name</label><input type="text" [(ngModel)]="mname" align="center" placeholder="Enter Your Mother's Name"><br>
<button type="submit" (click)="gotonewdashboard()">SAVE </button>
 </div>
 
  
`,
  styles: [
    `
    .button{
      position: fixed;
      top: 50%;
      left: 50%;
      margin-top: -50px;
      margin-left: -100px;
    `
  ]
})
export class ProfileComponent implements OnInit {


  public name='';
  public age:any;
  public fname='';
  public mname='';
public start=true;
public end=false;
  constructor(private route: Router,private proservice:ProfileService) { }

  ngOnInit() {

  }
  
  gotonewdashboard()
  {

    let stud=
       {
       "name":this.name,
       "age": this.age,
       "mname":this.mname,
       "fname":this.fname
       }



    if(this.name =='')
    {
      window.alert("Enter Name");
    }
    if(this.age =='' )
    {
      window.alert("Enter Age");
    }
    if(this.fname =='')
    {
      window.alert("Enter Father's Name");
    }
    if(this.mname =='')
    {
      window.alert("Enter Mother's Name");
    }
    if(this.name!='' && this.age!=null && this.fname!= ' ' && this.mname!='')
    {
      this.start=false;
    this.end=true;
    this.proservice.profile=stud;
    this.route.navigate(['/web/dashboard'])
    }
  }
}
