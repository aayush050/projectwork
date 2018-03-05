import { Injectable } from '@angular/core';

@Injectable()
export class CollegeService {

  college = { "cname": '', "roll": '', "branch": '', "pmarks": '' }
public data;
  constructor() { }

 

  setcollege(newdata) {
    this.data = newdata;
    localStorage.setItem('MY_COLLEGE_DATA',JSON.stringify(newdata));

  }

  getcollege()
  {    
    
  return JSON.parse(localStorage.getItem('MY_COLLEGE_DATA')) || {};
  }
  
}
