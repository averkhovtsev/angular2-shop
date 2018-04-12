import {Injectable} from '@angular/core';
import {User} from "../model/user";
import {Role} from "../model/role";

const users: User[] = [
  new User(1, "user", [Role.USER]),
  new User(2, "admin", [Role.USER, Role.ADMIN])
];

@Injectable()
export class UserService {

  private _user: User;

  constructor() {
  }

  isAuthenticated(): boolean {
    return this._user && this._user.hasRoles();
  }

  isAdmin() {
    return this._user && this._user.isAdmin();
  }

  login(username: string, password: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      const user: User = users.find(u => u.username == username && (u.id + '') === password);
      if (user) {
        this._user = user;
        resolve(user);
      } else {
        reject({code: 1, message: "Password is not correct. [hint: user=1, admin=2]"})
      }
    });
  }

  logout(): Promise<boolean> {
    this._user = null;
    return Promise.resolve(true);
  }

  getUsername(): string | undefined {
    return this._user ? this._user.username : undefined;
  }
}
