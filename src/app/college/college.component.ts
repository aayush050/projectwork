import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-college',
  template: `
  
  <div class="form" *ngIf="editable">
<h2> ENTER COLLEGE DETAILS </h2>
<label>College Name:</label><input  [(ngModel)]=cname type="text" ><br>
<label> Roll Number:</label><input  [(ngModel)]=roll type="text"><br>
<label>Branch:</label><input  [(ngModel)]=branch type="text"><br>
<label>Percentage Marks:</label><input  [(ngModel)]=pmarks type="number"><br>
<button (click)="gotonewcollege()" type="submit">Save</button>
</div>
<div class="form" *ngIf="!editable">
<label>College Name: </label>{{data.cname}}<br>
<label>Roll Number: </label>{{data.roll}}<br>
<label>Branch:</label> {{data.branch}}<br>
<label>Percentage Marks: </label>{{data.pmarks}}<br>
<button (click)="update()" type="submit">Update</button>
</div>

  `,
  styles: [
    `
    .form
    {
      position: relative;
      left: 250px;
      top:250px;
       width: 400px;
    }
    

    label { float: left; width: 150px; }

    input { float: left; width: 200px; }
   p { float: left; width: 200px; }
`

  ]
})
export class CollegeComponent implements OnInit {


  public cname = '';
  public roll = '';
  public branch = '';
  public pmarks: any;
  public data;
  public editable = true;

  constructor(private route: Router, private colgService: CollegeService) { }

  ngOnInit() {
    this.data=this.colgService.college;
    this.data = this.colgService.getcollege();
    if (this.data.cname === '' || this.data.cname == undefined) {
      this.editable = true;
    }
    else {
      this.editable = false;
      this.initdata();
    }
  }
initdata()
{
      this.cname = this.data.cname;
      this.roll = this.data.roll;
      this.branch = this.data.branch;
      this.pmarks = this.data.pmarks;
}
  gotonewcollege() {


    let stud = {

      "cname": this.cname,
      "roll": this.roll,
      "branch": this.branch,
      "pmarks": this.pmarks
    }

    if (this.cname != '' && this.roll != null && this.branch != ' ' && this.pmarks != null) {
      
      this.colgService.setcollege(stud);
      this.colgService.college=stud;
      this.data=this.colgService.college;
      this.editable = false;
      
    }
    else {
      window.alert("Enter Data Carefully");
    }
  }
  update() {

this.initdata();
    this.editable = true;
  }
}
