import {InjectionToken} from "@angular/core";

export const CONSTANTS = new InjectionToken<ConstantsService>('ConstantsService');

export interface ConstantsService {

  Application: string;
  Version: string;

}
