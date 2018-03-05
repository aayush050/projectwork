import { Injectable } from '@angular/core';

@Injectable()
export class SchoolService {

  school = { "sname": '', "address": '', "marks": '' };

public data;
  constructor() { }




  setschool(newdata) {
    this.data = newdata;
    localStorage.setItem('MY_SCHOOL_DATA',JSON.stringify(newdata));

  }

  getschool()
  { 
    return  JSON.parse(localStorage.getItem('MY_SCHOOL_DATA')) || {};
  }

}
