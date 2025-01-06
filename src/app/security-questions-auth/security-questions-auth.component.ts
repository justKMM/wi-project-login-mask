import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment_variables } from '../../../environments/environment';

@Component({
  selector: 'app-security-questions-auth',
  templateUrl: './security-questions-auth.component.html',
  styleUrl: './security-questions-auth.component.css'
})
export class SecurityQuestionsAuthComponent {
  questions: string[] = [
    'What is your first pet\'s name?', 
    'What is your mother\'s maiden name?', 
    'What is the city you were born in?'
  ];
  answers = environment_variables.security_answers;
  question1: string = this.questions[0];
  question2: string = this.questions[1];
  question3: string = this.questions[2];
  answer_first_pet: string = this.answers.first_pet;
  answer_maiden_name: string = this.answers.maiden_name;
  answer_city: string = this.answers.city;
  input_answer_first_pet: string = '';
  input_answer_maiden_name: string = '';
  input_answer_city: string = '';
  showError: boolean = false;

  constructor(private router: Router) {}

  verifyAnswers() {
    this.showError = true;

    if (this.input_answer_first_pet == this.answer_first_pet && 
        this.input_answer_maiden_name == this.answer_maiden_name && 
        this.input_answer_city == this.answer_city) {
      localStorage.setItem('isSecurityQuestionsAuthenticated', 'true');
      this.router.navigate(['/home']);
    } 
  }
}