import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  template: `
  
<div class="form" *ngIf="editable">
<h2> ENTER YOUR DETAILS </h2>
<label>My Name:</label><input  [(ngModel)]=name type="text" ><br>
<label>My Age:</label><input  [(ngModel)]=age type="number"><br>
<label>Father's Name:</label><input  [(ngModel)]=fname type="text"><br>
<label>Mother's Name:</label><input  [(ngModel)]=mname type="text"><br>
<button (click)="gotonewdashboard()" type="submit">Save</button>
</div>
<div class="form" *ngIf="!editable">
<label>Name: </label>{{data.name}}<br>
<label>Age: </label>{{data.age}}<br>
<label>Father's Name:</label> {{data.fname}}<br>
<label>Mother's Name: </label>{{data.mname}}<br>
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
export class ProfileComponent implements OnInit {


  public name = '';
  public age= '';
  public fname = '';
  public mname = '';
  public data;
  public editable = true;
  constructor(private route: Router, private proservice: ProfileService) { }

  ngOnInit() {
    this.data = this.proservice.profile;
    if (this.data.name === '') {
      this.editable = true;
      this.name = this.proservice.profile.name;

    }
    else {
      this.editable = false;
      this.name = this.proservice.profile.name;
      this.age = this.proservice.profile.age;
      this.fname = this.proservice.profile.fname;
      this.mname = this.proservice.profile.mname;

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

    if (this.name != '' && this.age !=null && this.fname != '' && this.mname != '') {

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
