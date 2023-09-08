import { LoginService } from './../../services/login.service';
import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  showAlert: boolean = false;

  constructor(private authService: AuthService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.getLogin().subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

  openAlert() {
    this.authService.setLogin('Basic');
  }
}
