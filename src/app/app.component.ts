import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-mask';

  constructor(private router: Router) {
    if (localStorage.getItem('isLoggedIn') != 'true') 
      localStorage.setItem('isLoggedIn', 'false');
    if (localStorage.getItem('isTwoFactorAuthenticated') != 'true') 
      localStorage.setItem('isTwoFactorAuthenticated', 'false');
    if (localStorage.getItem('isSecurityQuestionsAuthenticated') != 'true') 
      localStorage.setItem('isSecurityQuestionsAuthenticated', 'false');

    router.navigate(['/login'])
  }
}
