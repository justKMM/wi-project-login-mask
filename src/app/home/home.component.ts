import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post, posts, getPostById, getPostsByUser } from '../../models/Post';
import { User, users } from '../../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentUser: User = {
    id: 38,
    username: 'johndoe038',
    name: 'John Doe',
    image_uri: '/profile_imgs/currentUser.jpg',
  };

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
