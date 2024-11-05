import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LoginAuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let loginAuthGuard: LoginAuthGuard;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        loginAuthGuard,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });

    loginAuthGuard = TestBed.inject(LoginAuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(loginAuthGuard).toBeTruthy();
  });
});
