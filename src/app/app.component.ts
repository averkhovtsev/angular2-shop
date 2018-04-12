import {Component, Inject, OnInit} from '@angular/core';
import {CartService} from "./cart/cart.service";
import {CONSTANTS, ConstantsService} from "./core/service/constants.service";
import {UserService} from "./core/service/user.service";
import {Router} from "@angular/router";

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
              private router: Router) {

    this.application = CONSTANTS.Application;
    this.version = CONSTANTS.Version;
  }

  ngOnInit() {
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
