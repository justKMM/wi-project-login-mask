import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { TwoFactorAuthComponent } from './two-factor-auth/two-factor-auth.component';
import { SecurityQuestionsAuthComponent } from './security-questions-auth/security-questions-auth.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TwoFactorAuthComponent,
    SecurityQuestionsAuthComponent,
    PrivateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
