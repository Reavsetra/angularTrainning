import { Component } from '@angular/core';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  showAlert: boolean = false;

  openAlert() {
    this.showAlert = !this.showAlert;
  }
}
