import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TwoFactorAuthComponent } from './two-factor-auth/two-factor-auth.component';
import { SecurityQuestionsAuthComponent } from './security-questions-auth/security-questions-auth.component';
import { LoginAuthGuard, TwoFactorAuthGuard, SecurityQuestionsAuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'two-factor-auth', component: TwoFactorAuthComponent},
  { path: 'security-questions-auth', component: SecurityQuestionsAuthComponent},
  { path: 'home', component: HomeComponent, canActivate: [LoginAuthGuard, TwoFactorAuthGuard, SecurityQuestionsAuthGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }