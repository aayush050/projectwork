import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectworkService } from '../projectwork.service';

@Component({
  selector: 'app-profile',
  template: `
<p style="text-align:center" >
    
   <label align="center">MyName</label>
   <input type="text"  align="center" required><br>
   <label align="center">MyAge</label>
<input type="text"  align="center" required><br>
<label align="center">Father's Name</label>
<input type="text"  align="center" required><br>
<label align="center">Mother's Name</label>
<input type="text"  align="center" required><br>
<button type="submit" (click)="dashboard()">SAVE </button>
 
 </p>
  
`,
  styles: []
})
export class ProfileComponent implements OnInit {

 public parentdata='';

  constructor(private route: Router,private proservice:ProjectworkService) { }

  ngOnInit() {
    this.parentdata=this.proservice.getdata();
  }
  gotoprofile()
  {
    window.alert("NO DATA FOUND");
  }
  gotoschool()
  {
    window.alert("NO DATA FOUND");
  }
  gotocollege()
  {
    window.alert("NO DATA FOUND");
  }
  dashboard()
  {

  }
}
