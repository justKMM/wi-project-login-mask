import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrls: ['./two-factor-auth.component.css']
})
export class TwoFactorAuthComponent {
  inputCode: string = '';
  generatedCode: string = '';

  constructor(private router: Router) {
    // Generate a random 4-digit code when the component is initialized
    this.generate2FACode();
  }

  generate2FACode() {
    // Generate a random 4-digit code
    this.generatedCode = Math.floor(1000 + Math.random() * 9000).toString();
    console.log('Generated 2FA Code:', this.generatedCode); // For debugging purposes
  }

  verifyCode() {
    if (this.inputCode === this.generatedCode) {
      localStorage.setItem('isTwoFactorAuthenticated', 'true');
      console.log(localStorage.getItem('isTwoFactorAuthenticated'))
      this.router.navigate(['/security-questions-auth']);
    } else {
      alert('Invalid 2FA code. Please try again.');
    }
  }
}