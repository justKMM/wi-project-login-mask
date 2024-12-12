import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment_variables } from '../../../environments/environment'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  isLoading: boolean = false;
  loginSuccess: boolean = false;

  private correctUsername: string = 'john_doe85_user'; // A gift for you guys
  private correctPassword: string = environment_variables.credentials.password;

  constructor(private router: Router) {
  }

  verifyUser() {
    // Reset errors
    this.loginError = '';
    
    // Basic validation
    if (!this.username || !this.password) {
      this.loginError = 'Username & Password required';
      return;
    }
    // Show loading state
    this.isLoading = true;
    // Simulate login check
    console.log('Attempting to log in with:', this.username);
    this.isLoading = false;
    if (this.username === this.correctUsername && this.password === this.correctPassword) {
      this.loginSuccess = true;
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/two-factor-auth']);
    } else {
      this.loginError = 'Invalid username or password';
    }
  }
}
