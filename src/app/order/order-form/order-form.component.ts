import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../cart/cart.service";
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {CustomValidators} from "../../core/validator/custom.validators";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit, OnDestroy {

  orderForm: FormGroup;
  emailMessage:string;
  private sub: Subscription;


  private validationMessages = {
    email: 'Please enter a valid email address.'
  };

  constructor(private cartService: CartService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.orderForm = this.buildForm();
    this.watchFormValues();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  order() {

  }

  isValid(controlName: string, i?: number): boolean {
    const control = i === undefined ? this.orderForm.get(controlName) : (<FormArray>this.orderForm.get('phones')).controls[i];
    return (control.touched || control.dirty) && control.invalid;
  }

  hasErrors(controlName: string): boolean {
    const control = this.orderForm.get(controlName);
    return (control.touched || control.dirty) && control.invalid;
  }

  addPhone() {
    this.phones.push(this.buildPhone());
  }
  removePhone(i: number) {
    this.phones.removeAt(i);
  }
  get phones():FormArray {
    return <FormArray>this.orderForm.get('phones');
  }

  private buildForm() {
    return this.fb.group({
      name: ['', {validators: [Validators.required, Validators.minLength(3)]}],
      contactVia: 'email',
      email: ['', {validators: [Validators.required, Validators.email]}],
      phones: this.fb.array([this.buildPhone()]),
    });
  }

  private watchFormValues() {
    this.sub = this.orderForm.get('contactVia').valueChanges.subscribe(value => this.contactViaChanged(value));
    const emailControl = this.orderForm.get('email');
    const sub = emailControl.valueChanges
        .subscribe(value => this.setMessage(emailControl));
    this.sub.add(sub);
  }

  private setMessage(c: AbstractControl) {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object
          .keys(c.errors)
          .map(key => this.validationMessages[key])
          .join(' ');
    }
  }

  private contactViaChanged(value: string) {
    const emailControl = this.orderForm.get('email');
    const phonesControl = <FormArray>this.orderForm.get('phones');

    if (value === 'phone') {
      phonesControl.controls.forEach(c => c.setValidators([Validators.required, CustomValidators.phone]));
      emailControl.setValidators([Validators.email])
    }
    else {
      phonesControl.controls.forEach(c => c.setValidators([CustomValidators.phone]));
      emailControl.setValidators([Validators.required, Validators.email]);
    }
    phonesControl.controls.forEach(c => c.updateValueAndValidity());
    emailControl.updateValueAndValidity();
  }

  private buildPhone() {
    return this.fb.control('', [CustomValidators.phone]);
  }
}
