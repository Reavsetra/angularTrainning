import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;
  userType: string = '';

  constructor() { }

  setLogin(value: string) {
    this.isLogged = true;
    this.userType = value;
    localStorage.setItem('IS_LOGGED', 'true');
    localStorage.setItem('USER_TYPE', this.userType);
    return of({ success: this.isLogged, userType: this.userType });
  }

  setLogout() {
    this.isLogged = false;
    this.userType = '';
    localStorage.setItem('IS_LOGGED', 'false');
    localStorage.setItem('USER_TYPE', '');
    return of({ success: this.isLogged, userType: '' });
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('IS_LOGGED');
    this.isLogged = loggedIn === 'true';
    return this.isLogged;
  }

  getRole() {
    this.userType = localStorage.getItem('USER_TYPE') ?? '';
    return this.userType;
  }
}

