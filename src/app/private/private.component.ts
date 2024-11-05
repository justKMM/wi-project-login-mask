import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent {
  constructor(private router: Router) {
    console.log(`Logged In: ${localStorage.getItem('isLoggedIn')}, 2FA: ${localStorage.getItem('isTwoFactorAuthenticated')}, Security Questions: ${localStorage.getItem('isSecurityQuestionsAuthenticated')}`);
  }

  onLogOut() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('isTwoFactorAuthenticated', 'false');
    localStorage.setItem('isSecurityQuestionsAuthenticated', 'false');

    this.router.navigate(['']);
  }
}
