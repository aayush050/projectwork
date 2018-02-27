import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school',
  template: `
  <div class="button" *ngIf="!editable">
  <h1> SCHOOL DETAILS </h1>
  <label align="center">School Name  :</label>{{data.sname}}<br><br>
  <label align="center">Address   :</label>{{data.address}}<br><br>
  <label align="center">Percentage Marks  :</label>{{data.marks}}<br><br>
  <button type="submit" (click)="update()">UPDATE</button>
  
  </div>
  
<div class="button" *ngIf="editable">
<h1> ENTER SCHOOL DETAILS </h1>  
  <label align="center">School Name</label><input type="text" [(ngModel)]="sname" align="center" placeholder="Enter Your School Name" ><br>
  <label align="center">Address</label><input type="text" [(ngModel)]="address" align="center" placeholder="Enter Your Address" ><br>
  <label align="center">Percentage Marks</label><input type="number" [(ngModel)]="marks" min="0" align="center" placeholder="Enter Your Marks" ><br><br>
  <button type="submit" (click)="gotonewschool()">SAVE </button>
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
export class SchoolComponent implements OnInit {


  public sname;
  public address;
  public marks;
  public data;
  public editable = true;
  
  constructor(private route: Router, private schService: SchoolService) { }

  ngOnInit() {
    this.data = this.schService.school;
    if(this.data.sname==='')
    {
      this.editable=true;
    }
    else{
      this.editable=false;
    }
  }

  gotonewschool() {

    let stud = {

      "sname": this.sname,
      "address": this.address,
      "marks": this.marks
    }

    if (this.sname == '') {
      window.alert("Enter Name");
    }
    if (this.address == '') {
      window.alert("Enter Address");
    }
    if (this.marks == '') {
      window.alert("Enter Marks");
    }

    if (this.sname != '' && this.address != null && this.marks != ' ') {
      this.schService.school = stud;
      this.data = this.schService.school;
      
      this.editable=false;
      
  
    }
  }
  update()

{
  
  this.editable=true;
}
}
