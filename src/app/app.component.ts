import {Component, Inject, OnInit} from '@angular/core';
import {CartService} from "./cart/cart.service";
import {CONSTANTS, ConstantsService} from "./core/service/constants.service";
import {UserService} from "./core/service/user.service";
import {Router} from "@angular/router";
import {AppSettingsService} from "./core/service/app-settings.service";
import {AppSettings} from "./core/model/app-settings";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  application: string;
  version: string;
  today: number = Date.now();


  constructor(private cartService: CartService,
              @Inject(CONSTANTS) private CONSTANTS: ConstantsService,
              private userService: UserService,
              private router: Router,
              private appSettingsService: AppSettingsService) {
  }

  ngOnInit() {
    this.appSettingsService.getSettings()
        .subscribe((settings:AppSettings) => {
          this.application = settings.application;
          this.version = settings.version;
        });

  }

  cartSize(): number {
    return this.cartService.size();
  }

  isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.userService.isAdmin();
  }

  getUsername(): string {
    return this.userService.getUsername();
  }

  logout() {
    this.userService.logout()
        .then(result => this.router.navigate(['/products']))
        .catch(error => alert(JSON.stringify(error)));
  }

}
