import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  template: `
  <p style="text-align:center" >
      
     <label align="center">School Name</label>
     <input type="text" #user align="center" required><br>
     <label align="center">Address</label>
  <input type="text" #user align="center" required><br>
  <label align="center">Percentage Marks</label>
  <input type="text" #user align="center" required><br>
  <button type="submit">SAVE </button>
   
   </p>
    
  `,
  styles: []
})
export class SchoolComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  gotoprofile()
  {
    this.route.navigate(['/web/profile']);
  }
  gotoschool()
  {
    this.route.navigate(['/web/school']);
  }
  gotocollege()
  {
    this.route.navigate(['/web/college']);
  }
}
