import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  template: `
  <div class="button" *ngIf="!editable">
  <h1> YOUR DETAILS </h1>
  <label align="center">My Name    :</label>{{data.name}}<br><br>
  <label align="center">Age        :</label>{{data.age}}<br><br>
  <label align="center">Father's Name    :</label>{{data.fname}}<br><br>
  <label align="center">Mother's Name       :</label>{{data.mname}}<br><br>
  <button type="submit" (click)="update()">UPDATE</button>
  </div>
  
<div class="button" *ngIf= "editable">
<h1> ENTER YOUR DETAILS </h1>
<label align="center">MyName</label><input type="text" [(ngModel)]="name" align="center" placeholder="Enter Your Name" ><br>
<label align="center">MyAge</label><input type="number" [(ngModel)]="age" align="center" min="0" placeholder="Enter Your Age"><br>
<label align="center">Father's Name</label><input type="text" [(ngModel)]="fname" align="center" placeholder="Enter Your Father's Name"><br>
<label align="center">Mother's Name</label><input type="text" [(ngModel)]="mname" align="center" placeholder="Enter Your Mother's Name"><br><br>
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


  public name = '';
  public age: any;
  public fname = '';
  public mname = '';
  public data;
  public editable = true;
  constructor(private route: Router, private proservice: ProfileService) { }

  ngOnInit() {
    this.data = this.proservice.profile;
    if (this.data.name === '') {
      this.editable = true;
    }
    else {
      this.editable = false;
    }
  }

  gotonewdashboard() {

    let stud =
      {
        "name": this.name,
        "age": this.age,
        "mname": this.mname,
        "fname": this.fname
      }

    if (this.name != '' && this.age != null && this.fname != ' ' && this.mname != '') {

      this.proservice.profile = stud;
      this.data = this.proservice.profile;
      this.editable = false;
    }
    else {
      window.alert("Enter Data Carefully");
    }
  }
  update() {

    this.editable = true;
  }
}
