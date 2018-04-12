import {Role} from "./role";

export class User {

  constructor(public id: number,
              public username: string,
              public roles: Role[]) {
  }

  hasRoles(): boolean {
    return this.roles && this.roles.length > 0;
  }

  isAdmin(): boolean {
    return this.roles && this.roles.indexOf(Role.ADMIN) > -1;
  }

}