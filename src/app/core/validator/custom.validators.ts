import {AbstractControl, ValidatorFn} from '@angular/forms';

export class CustomValidators {

  static phone(c: AbstractControl): { [key: string]: boolean } | null {
    return checkPhone(c);
  }

  static phoneNumber(digits:number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      return checkPhone(c, digits);
    }
  }
}

export function checkPhone(
    c: AbstractControl, digits: number = 9
): { [key: string]: boolean } | null {
  if (c.value !== undefined && (Number.isNaN(c.value) || c.value.toString().length !== digits)) {
    return { phone: true };
  }
  return null;
}
