import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-college',
  template: `
  
  <p class="button" *ngIf="end">
  <label align="center">College Name  :</label>{{this.cname}}<br>
  <label align="center">Roll Number   :</label>{{this.roll}}<br>
  <label align="center">Branch  :</label>{{this.branch}}<br>
  <label align="center">CGPA  :</label>{{this.pmarks}}<br>
 
  </p>
  
<div class="button" *ngIf="start">
    
  <label align="center">College Name</label><input type="text" [(ngModel)]="cname" placeholder="Enter Your College Name" align="center" ><br>
  <label align="center">Roll Number</label><input type="text" [(ngModel)]="roll" placeholder="Enter Your Roll Number"  align="center" ><br>
  <label align="center">Branch</label><input type="text" [(ngModel)]="branch" placeholder="Enter Your Branch" align="center" ><br>
  <label align="center">CGPA</label><input type="number" [(ngModel)]="pmarks" placeholder="Enter Your Percentage Marks" align="center"><br>
  <button type="submit" (click)="gotonewcollege()">SAVE </button>
   
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
export class CollegeComponent implements OnInit {

  public start=true;
  public end=false;
  public cname;
  public roll;
  public branch;
  public pmarks;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  gotonewcollege()
{
  if(this.cname =='')
  {
    window.alert("Enter Name");
  }
  if(this.roll =='' )
  {
    window.alert("Enter Roll Number");
  }
  if(this.branch =='')
  {
    window.alert("Enter Branch");
  }
  if(this.pmarks =='')
  {
    window.alert("Enter Marks");
  }
  if(this.cname!='' && this.roll!=null && this.branch!= ' ' && this.pmarks!='')
  {
    this.start=false;
  this.end=true;
  }
}
}
