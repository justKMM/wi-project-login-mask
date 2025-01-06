import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { posts } from '../../models/Post';
import { User, users } from '../../models/User';
import { currentUser } from '../../../environments/global_variables'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentUser: User = currentUser;

  posts = posts;
  users = users;

  suggestions = [
    { user: users.find(user => user.id === 4), status: 'Followed by user1' },
    { user: users.find(user => user.id === 5), status: 'New to Instagram' },
    { user: users.find(user => user.id === 6), status: 'Followed by user2' },
    { user: users.find(user => user.id === 7), status: 'Followed by user3' },
    { user: users.find(user => user.id === 8), status: 'New to Instagram' }
  ];

  constructor(private router: Router) {}

  onLogOut() {
    // Clear all authentication flags
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isTwoFactorAuthenticated');
    localStorage.removeItem('isSecurityQuestionsAuthenticated');
    
    // Navigate to login page
    this.router.navigate(['/login']);
  }
}
