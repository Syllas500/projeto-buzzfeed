import { Component } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent {
  title: string = '';

  questions: any;
  questionSelected: any;

  answers: string[] = [];
  answersSelected: string = '';

  questioIndex: number = 0;
  questioMaxIndex: number = 0;

  finished: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false;
      this.title = quizz_questions.title;
    }
  }
}
