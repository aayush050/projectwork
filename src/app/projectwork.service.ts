import { Injectable } from '@angular/core';

@Injectable()
export class ProjectworkService {

  username = '';
  constructor() { }
  getdata() {

    return this.username;
  }


  setproject(newdata) {
    this.username = newdata;
    localStorage.setItem('MY_PROJECT_DATA',JSON.stringify(newdata));

  }

  getproject()
  {    
    
  return JSON.parse(localStorage.getItem('MY_PROJECT_DATA')) || {};
  }


}
