import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  private localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  getItem(key: string): any {
    return this.localStorage.getItem(key);
  }

  setItem(key: string, value: any): void {
    this.localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }

}
