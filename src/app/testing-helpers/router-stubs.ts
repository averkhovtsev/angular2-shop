import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Component, Directive, Injectable, Input} from '@angular/core';
import {NavigationExtras} from '@angular/router';


@Injectable()
export class ActivatedRouteStub {

  private subject = new BehaviorSubject(this.testParams);
  private _testParams: {};

  paramMap = this.subject.asObservable();

  get testParams() {
    return this._testParams;
  }

  set testParams(paramMap: {}) {
    this._testParams = paramMap;
    this.subject.next(paramMap);
  }

  get snapshot() {
    return {paramMap: this.testParams};
  }
}

@Injectable()
export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) {
  }

  navigateByUrl(url: string) {
    return url;
  }
}

@Directive({
  selector: '[routerLink]',
  host: {'(click)': 'onClick()'}
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

@Component({selector: 'router-outlet', template: ''})
export class RouterOutletStubComponent {
}
