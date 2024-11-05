import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TwoFactorAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isTwoFactorAuthenticated = localStorage.getItem('isTwoFactorAuthenticated') === 'true';

    if (!isTwoFactorAuthenticated) {
      this.router.navigate(['/two-factor-auth']);
      return false;
    }

    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SecurityQuestionsAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isSecurityQuestionsAuthenticated = localStorage.getItem('isSecurityQuestionsAuthenticated') === 'true';

    if (!isSecurityQuestionsAuthenticated) {
      this.router.navigate(['/security-questions-auth']);
      return false;
    }

    return true;
  }
}