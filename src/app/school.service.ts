import { Injectable } from '@angular/core';

@Injectable()
export class SchoolService {

  school = { "sname": '', "address": '', "marks": '' };


  constructor() { }

  getschool() {
    return this.school;
  }

}
