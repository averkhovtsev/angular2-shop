import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from "../service/user.service";

@Injectable()
export class AdminGuard implements CanLoad, CanActivate {

  constructor(
      private userService: UserService,
      private router: Router
  ) {}

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAdmin();
  }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAdmin();
  }

  private isAdmin(): boolean {
    if (this.userService.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
