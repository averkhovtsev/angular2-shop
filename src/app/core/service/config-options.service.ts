import {Injectable} from '@angular/core';

@Injectable()
export class ConfigOptionsService {

  private _id: number;
  private _login: string;
  private _email: string;

  constructor() {
  }

  get id() : number {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }


  get login() : string {
    return this._login;
  }
  set login(login: string) {
    this._login = login;
  }


  get email() : string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

}
