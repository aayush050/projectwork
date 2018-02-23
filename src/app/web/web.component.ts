import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectworkService } from '../projectwork.service';

@Component({
  selector: 'app-web',
  template: `
  <router-outlet></router-outlet>
  <table border =0 width="100%">
<tr>
   <th>
  <img src="home/msys/Desktop/projectwork/src/images.png" width="50" height="50">
  </th>
  <th width = "90%" colspan ="2"><p style="text-align:right">{{this.username}}</p></th>
</tr>
<tr>
   <td height="20" ><button (click)="gotoprofile()">PROFILE</button></td>
  
   <td colspan ="2" rowspan="5" height="500"  >
  
      
   
  </td>
              
</tr>
<tr>
  <td height="20"> <button (click)="gotoschool()" >SCHOOL</button> </td>
</tr>
<tr>
  <td height="20"> <button (click)="gotocollege()">COLLEGE</button></td>
</tr>
<tr>
 <td></td>
</tr>

</table>
    
  `,
  styles: []
})
export class WebComponent implements OnInit {
public username='';

  constructor(private routerr: ActivatedRoute, private route:Router,private proservice: ProjectworkService) { }

  ngOnInit() {
    this.username=this.proservice.getdata();
  }

gotoprofile()
{
  this.route.navigate(['profile'], {relativeTo: this.routerr});
}
gotoschool()
{
  this.route.navigate(['school'], {relativeTo: this.routerr});
}
gotocollege()
{
  this.route.navigate(['college'], {relativeTo: this.routerr});
}
}
