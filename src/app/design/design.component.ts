import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  template: `
   
  <table border =0 width="100%">
<tr>
   <th>
  <img src="nkn.png">
  </th>
  <th width = "90%" colspan ="2"><p style="text-align:right"> USERNAME</p></th>
</tr>
<tr>
   <td height="20" >
     <button >PROFILE</button>
   </td>
  
   <td colspan ="2" rowspan="5" height="500"  >
  <p style="text-align:center" >
    
  
   
   
     <button (click)="goToMenu(user.value,pass.value)"  type="submit" >ADD MY DETAILS</button>
   
   </p>  
    
  
  </td>
              
</tr>
<tr>
  <td height="20"> <button >SCHOOL</button> </td>
</tr>
<tr>
  <td height="20"> <button >COLLEGE</button></td>
</tr>
<tr>
 <td></td>
</tr>

</table>
  `,
  styles: []
})
export class DesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
