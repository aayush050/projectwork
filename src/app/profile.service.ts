import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

  profile = { "name": '', "age": '', "fname": '', "mname": '' };

  constructor() { }
  getprofile() {
    let localStorageItem = JSON.parse(localStorage.getItem('profile'));
    return localStorageItem==null?[] : localStorageItem.profile;
  }
toggle()
{
  return true;
}

}
