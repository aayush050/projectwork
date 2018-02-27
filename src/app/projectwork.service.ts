import { Injectable } from '@angular/core';

@Injectable()
export class ProjectworkService {

  username = '';
  constructor() { }
  getdata() {

    return this.username;
  }
}
