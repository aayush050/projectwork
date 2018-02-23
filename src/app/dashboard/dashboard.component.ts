import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectworkService } from '../projectwork.service';

@Component({
  selector: 'app-dashboard',
  template: `

 
     <p>
     aaaa
     </p>
   

    
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router,private proservice: ProjectworkService) { }

  ngOnInit() {

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
gotonewprofile()
{
  this.route.navigate(['/web/profile']);
}
}
