import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school',
  template: `
  <div class="form" *ngIf="editable">
  <h2> ENTER SCHOOL DETAILS </h2>
  <label>School Name:</label><input  [(ngModel)]=sname type="text" ><br>
  <label>Address:</label><input  [(ngModel)]=address type="text"><br>
  <label> Marks:</label><input  [(ngModel)]=marks type="number"><br>
  <button (click)="gotonewschool()" type="submit">Save</button>
  </div>
  <div class="form" *ngIf="!editable">
  <label>School Name: </label>{{data.sname}}<br>
  <label>Address:</label> {{data.address}}<br>
  <label> Marks: </label>{{data.marks}}<br>
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

    

    if (this.sname != '' && this.address != '' && this.marks != null) {
      this.schService.school = stud;
      this.data = this.schService.school;
      
      this.editable=false;
      
  
    }
    else{
      window.alert("Enter Data Carefully");
    }
  }
  update()

{
  
  this.editable=true;
}
}
