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

  constructor(private router: Router) {}

  verifyUser() {
    // Simulate login check (replace this with actual authentication)
    if (this.username === 'testuser' && this.password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/two-factor-auth']);
    } else {
      alert('Invalid username or password');
    }
  }
}
