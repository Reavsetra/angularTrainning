import { AuthService } from './../../../../core/services/auth.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  showAlert: boolean = false;

  constructor(private authService: AuthService) {}

  openAlert() {
    this.authService.setLogin('Basic');
  }
}
