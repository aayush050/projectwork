import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  template: `
  <p class="button" *ngIf="end">
  <label align="center">School Name  :</label>{{this.sname}}<br>
  <label align="center">Address   :</label>{{this.address}}<br>
  <label align="center">Percentage Marks  :</label>{{this.marks}}<br>
 
  </p>
  
<div class="button" *ngIf="start">
      
  <label align="center">School Name</label><input type="text" [(ngModel)]="sname" align="center" placeholder="Enter Your School Name" ><br>
  <label align="center">Address</label><input type="text" [(ngModel)]="address" align="center" placeholder="Enter Your Address" ><br>
  <label align="center">Percentage Marks</label><input type="number" [(ngModel)]="marks"  align="center" placeholder="Enter Your Marks" ><br>
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

public start=true;
public end=false;
public sname;
public address;
public marks;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  gotonewschool()
  {
    if(this.sname =='')
    {
      window.alert("Enter Name");
    }
    if(this.address =='' )
    {
      window.alert("Enter Address");
    }
    if(this.marks =='')
    {
      window.alert("Enter Marks");
    }
                         
    if(this.sname!='' && this.address!=null && this.marks!= ' ')
    {
      this.start=false;
    this.end=true;
    }
  }
}
