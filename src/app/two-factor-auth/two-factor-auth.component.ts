import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrls: ['./two-factor-auth.component.css']
})
export class TwoFactorAuthComponent implements OnInit, OnDestroy {
  inputCode: string = '';
  generatedCode: string = '';
  showError: boolean = false;
  timeLeft: number = 300; // 5 minutes in seconds
  private timer: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.generate2FACode();
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  generate2FACode() {
    this.generatedCode = Math.floor(1000 + Math.random() * 9000).toString();
    this.timeLeft = 300; // Reset timer when new code is generated
    console.log('Generated 2FA Code:', this.generatedCode);
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.generate2FACode(); // Generate new code when timer expires
      }
    }, 1000);
  }

  verifyCode() {
    if (this.inputCode === this.generatedCode) {
      localStorage.setItem('isTwoFactorAuthenticated', 'true');
      this.router.navigate(['/security-questions-auth']);
    } else {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000); // Hide error after 3 seconds
      this.inputCode = ''; // Clear input on error
    }
  }
}