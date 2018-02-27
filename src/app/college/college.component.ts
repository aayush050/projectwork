import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-college',
  template: `
  
  <div class="button" *ngIf="!editable">
  <h1> COLLEGE </h1>
  <label align="center">College Name  :</label>{{data.cname}}<br><br>
  <label align="center">Roll Number   :</label>{{data.roll}}<br><br>
  <label align="center">Branch  :</label>{{data.branch}}<br><br>
  <label align="center">CGPA  :</label>{{data.pmarks}}<br><br>
  <button type="submit" (click)="update()">UPDATE</button>
  </div>
  
<div class="button" *ngIf="editable">
    <h1> ENTER COLLEGE DETAILS </h1>    
  <label align="center">College Name</label><input type="text" [(ngModel)]="cname" placeholder="Enter Your College Name" align="center" ><br>
  <label align="center">Roll Number</label><input type="text" [(ngModel)]="roll" placeholder="Enter Your Roll Number" min="0"  align="center" ><br>
  <label align="center">Branch</label><input type="text" [(ngModel)]="branch" placeholder="Enter Your Branch" align="center" ><br>
  <label align="center">CGPA</label><input type="number" [(ngModel)]="pmarks" placeholder="Enter Your Percentage Marks" max="10" min="0" align="center"><br><br>
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


  public cname = '';
  public roll = '';
  public branch = '';
  public pmarks: any;
  public data;
  public editable= true;
  
  constructor(private route: Router, private colgService: CollegeService) { }

  ngOnInit() {

    this.data = this.colgService.college;
    if(this.data.cname==='')
    {
      this.editable=true;
    }
    else{
      this.editable=false;
    }
  }

  gotonewcollege() {


    let stud = {

      "cname": this.cname,
      "roll": this.roll,
      "branch": this.branch,
      "pmarks": this.pmarks
    }


    if (this.cname == '') {
      window.alert("Enter Name");
    }
    if (this.roll == '') {
      window.alert("Enter Roll Number");
    }
    if (this.branch == '') {
      window.alert("Enter Branch");
    }
    if (this.pmarks == '') {
      window.alert("Enter Marks");
    }
    if (this.cname != '' && this.roll != null && this.branch != ' ' && this.pmarks != '') {
      this.colgService.college = stud;
      this.data = this.colgService.college;

      this.editable=false;
      
    }
  }
  update() {

    
  this.editable=true;
}
}
