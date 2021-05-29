import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from 'src/app/model/question';
import { questions } from 'src/app/model/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //data
  title = 'pop-quiz';
  _questions: Question[];
  currentQuestion: Question;
  currentIndexQuestion: number;
  isQuizOver: boolean;
  summary:Question[]=[];

  constructor() {
    this._questions = questions;
    this.currentIndexQuestion = 0;
    this.currentQuestion = this._questions[this.currentIndexQuestion];
    this.isQuizOver = false;
  }

  //method 
  selectAnswer(value: number): void {
    if (!this.isQuizOver) {
      this._questions[this.currentIndexQuestion].userAnswer = value;
    }
  }

  changeQuestion(): void {
    this.summary.push(this.currentQuestion);
   
    if (this.currentIndexQuestion !== this._questions.length - 1) {
      this.currentIndexQuestion++;
      this.currentQuestion = this._questions[this.currentIndexQuestion];
    } else {
      this.isQuizOver = true;
    }
  }

  changeLastPage(): boolean {
    if ((this._questions.length - 2) == this.currentIndexQuestion) {
      return true;
    }
    return false;
  }

  updateScore(): number {
    let correctAnswers = 0;
    for (let index = 0; index < this._questions.length; index++) {
      let currentQuestion = this._questions[index];
      if (currentQuestion.correctAnswer === currentQuestion.userAnswer) {
        correctAnswers++;
      }
    }
    return 100 * correctAnswers / this._questions.length;
  }

}
