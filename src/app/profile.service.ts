import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

profile={"name":'', "age":'', "fname":'',"mname":'' };

  constructor() {}
  getprofile()
  {
     return this.profile;
  }

  
}
