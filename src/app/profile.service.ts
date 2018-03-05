import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

  profile = { "name": '', "age": '', "fname": '', "mname": '' };
  public data;
  constructor() { }


  setprofile(newdata) {
    this.data = newdata;
    localStorage.setItem('MY_PROFILE_DATA',JSON.stringify(newdata));

  }

  getprofile()
  {
     return JSON.parse(localStorage.getItem('MY_PROFILE_DATA')) || {};
  }
  
  


}
