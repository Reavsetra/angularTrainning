import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  return inject(AuthService).isLoggedIn();
};

export const adminGuard: CanActivateFn = (route, state) => {
  const adminUserType = inject(AuthService).getRole() === 'Admin';

  return adminUserType;
};
