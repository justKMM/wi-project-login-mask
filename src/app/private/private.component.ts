import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post, posts, getPostById, getPostsByUser } from '../../models/Post';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent {
  currentUser = {
    username: 'johndoe',
    name: 'John Doe'
  };

  stories = [
    { username: 'user1' },
    { username: 'user2' },
    { username: 'user3' },
    { username: 'user4' },
    { username: 'user5' },
    { username: 'user6' }
  ];

  posts = posts;

  suggestions = [
    { username: 'user4', status: 'Followed by user1' },
    { username: 'user5', status: 'New to Instagram' },
    { username: 'user6', status: 'Followed by user2' },
    { username: 'user7', status: 'Followed by user3' },
    { username: 'user8', status: 'New to Instagram' }
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