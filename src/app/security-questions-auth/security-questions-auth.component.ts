import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-questions-auth',
  templateUrl: './security-questions-auth.component.html',
  styleUrl: './security-questions-auth.component.css'
})
export class SecurityQuestionsAuthComponent {
  questions: string[] = ['What is your first pet\'s name?', 'What is your mother\'s maiden name?', 'What is the city you were born in?'];
  answers: string[] = ['Leo', 'Müller', 'Ingelsheim'];

  index1: number = 0;
  index2: number = 1;
  index3: number = 2;

  question1: string = this.questions[this.index1];
  question2: string = this.questions[this.index2];
  question3: string = this.questions[this.index3];

  answer1: string = this.answers[this.index1];
  answer2: string = this.answers[this.index2];
  answer3: string = this.answers[this.index3];

  inputAnswer1: string = '';
  inputAnswer2: string = '';
  inputAnswer3: string = '';

  constructor(private router: Router) {}

  verifyAnswers() {
    if (this.inputAnswer1 === this.answer1 && this.inputAnswer2 === this.answer2 && this.inputAnswer3 === this.answer3) {
      localStorage.setItem('isSecurityQuestionsAuthenticated', 'true');
      alert('Answers correct!');
      this.router.navigate(['/private']);
    } else {
      alert('One or more answers incorrect! Please try again.');
    }
  }
}
