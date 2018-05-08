import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterLinkStubDirective} from './testing-helpers/router-stubs';
import {AppComponent} from './app.component';
import {CartService} from "./cart/cart.service";
import {CONSTANTS} from "./core/service/constants.service";
import {UserService} from "./core/service/user.service";
import {Router} from "@angular/router";
import {AppSettingsService} from "./core/service/app-settings.service";
import {of} from "rxjs/observable/of";
import {AppSettings} from "./core/model/app-settings";

let component: AppComponent,
    fixture: ComponentFixture<AppComponent>;

const appSettingsServiceStub = <AppSettingsService>{
  getSettings: function () {
    return of<AppSettings>({application: 'app', version: '-1.0'})
  }
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [
            AppComponent,
            RouterLinkStubDirective
          ],
          providers: [
            {provide: CartService, useValue: jasmine.createSpyObj('cartService', ['size'])},
            {provide: CONSTANTS, useValue: jasmine.createSpy()},
            {provide: UserService, useValue: jasmine.createSpyObj('userService', ['isAuthenticated', 'isAdmin', 'getUsername'])},
            {provide: Router, useValue: jasmine.createSpy()},
            {provide: AppSettingsService, useValue: appSettingsServiceStub}
          ],
          schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
  }));

  let links: RouterLinkStubDirective[],
      linkDes: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    linkDes = fixture.debugElement
        .queryAll(By.directive(RouterLinkStubDirective));

    links = linkDes
        .map(d => d.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(3);
    expect(links[0].linkParams).toBe('/login');
    expect(links[1].linkParams).toBe('/products');
    expect(links[2].linkParams).toBe('/cart');
  });

  it('can click login link in template', () => {
    const loginLinkElement = linkDes[0],
        loginLink = links[0];

    expect(loginLink.navigatedTo).toBeNull();

    loginLinkElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(loginLink.navigatedTo).toBe('/login');
  });
});
