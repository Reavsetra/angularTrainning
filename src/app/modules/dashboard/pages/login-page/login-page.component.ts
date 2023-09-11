import { LoginService } from './../../services/login.service';
import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  showAlert: boolean = false;
  login?: any;

  constructor(private authService: AuthService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.iniciarLogin();
  }

  iniciarLogin() {
    this.login = this.loginService.getLogin().subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

  ngOnDestroy(): void {
    console.log('desuscripción');
    this.login.unsubscribe();
  }

  openAlert() {
    this.authService.setLogin('Admin');
  }
}
