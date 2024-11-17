import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  usernameError: string = '';
  passwordError: string = '';
  isLoading: boolean = false;


  constructor(private router: Router) {}

  verifyUser() {
    // Reset errors
    this.usernameError = '';
    this.passwordError = '';
    
    // Basic validation
    if (!this.username) {
      this.usernameError = 'Username is required';
      return;
    }
    if (!this.password) {
      this.passwordError = 'Password is required';
      return;
    }
    // Show loading state
    this.isLoading = true;
    // Simulate login check
    setTimeout(() => {
      console.log('Attempting to log in with:', this.username);
      this.isLoading = false;
      if (this.username === 'testuser' && this.password === 'password') {
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/two-factor-auth']);
      } else {
        this.passwordError = 'Invalid username or password';
      }
    }, 1000);
    
  }
}
