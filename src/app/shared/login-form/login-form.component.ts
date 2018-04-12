import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../core/service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.username, this.password)
        .then(user => this.router.navigate(['/products']))
        .catch(error => alert(JSON.stringify(error)));
  }


}
