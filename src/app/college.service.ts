import { Injectable } from '@angular/core';

@Injectable()
export class CollegeService {

  college = { "cname": '', "roll": '', "branch": '', "pmarks": '' }

  constructor() { }

  getcollege() {
    return this.college;
  }

}
