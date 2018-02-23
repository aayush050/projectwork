import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-college',
  template: `
  
        
     <p style="text-align:center" >
      
     <label align="center">College Name</label>
     <input type="text" #user align="center" required><br>
     <label align="center">Roll Number</label>
  <input type="text" #user align="center" required><br>
  <label align="center">Branch</label>
  <input type="text" #user align="center" required><br>
  <label align="center">Percentage Marks</label>
  <input type="text" #user align="center" required><br>
  <button type="submit">SAVE </button>
   
   </p>
    
  `,
  styles: []
})
export class CollegeComponent implements OnInit {

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
