import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TwoFactorAuthComponent } from './two-factor-auth/two-factor-auth.component';
import { SecurityQuestionsAuthComponent } from './security-questions-auth/security-questions-auth.component';
import { PrivateComponent } from './private/private.component';
import { LoginAuthGuard, TwoFactorAuthGuard, SecurityQuestionsAuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'two-factor-auth', component: TwoFactorAuthComponent, canActivate: [LoginAuthGuard] },
  { path: 'security-questions-auth', component: SecurityQuestionsAuthComponent, canActivate: [LoginAuthGuard, TwoFactorAuthGuard] },
  { path: 'private', component: PrivateComponent, canActivate: [LoginAuthGuard, TwoFactorAuthGuard, SecurityQuestionsAuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
