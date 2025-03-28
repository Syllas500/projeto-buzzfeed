import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
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

      this.questions = quizz_questions.questions;
      this.questionSelected = this.questions[this.questioIndex];

      this.questioIndex = 0;
      this.questioMaxIndex = this.questions.length;

      console.log(this.questioIndex);
      console.log(this.questioMaxIndex);
    }
  }

  playerChoose(value: string) {
    this.answers.push(value);
    console.log(this.answers);
  }
  async nextSep() {
    this.questioIndex += 1;

    if (this.questioMaxIndex > this.questioIndex) {
      this.questionSelected = this.questions[this.questioIndex];
    } else {
      this.finished = true;
    }
  }
}
