import {Injectable} from '@angular/core';

@Injectable()
export class ConfigOptionsService {

  constructor(private id: number,
              private login: string,
              private email: string) {
  }

}
