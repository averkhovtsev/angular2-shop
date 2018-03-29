import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsService {

  constructor(public Application: string,
              public Version: string) {
  }

}
