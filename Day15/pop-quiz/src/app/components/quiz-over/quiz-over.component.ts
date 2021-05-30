import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-quiz-over',
  templateUrl: './quiz-over.component.html',
  styleUrls: ['./quiz-over.component.css']
})
export class QuizOverComponent implements OnInit {

  //data
  @Input()
  score: number = 0;

  @Input()
  answers: [number, number][] = [];

  endQuiz: string = 'Quiz Over!';
  scoreOut: string = 'Your score is: ';

  //methods
  ngOnInit(): void {
    this.updateScore();
  }

  updateScore() {
    let correctAnswers = 0;
    for (let index = 0; index < this.answers.length; index++) {
      let ans = this.answers[index];
      if (ans[0] === ans[1]) {
        correctAnswers++;
      }
    }
    this.score = 100 * correctAnswers / this.answers.length;
  }
}
