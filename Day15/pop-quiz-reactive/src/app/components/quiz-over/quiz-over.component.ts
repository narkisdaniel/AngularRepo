import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-over',
  templateUrl: './quiz-over.component.html',
  styleUrls: ['./quiz-over.component.css']
})
export class QuizOverComponent implements OnInit {


  score:number=0;
  endQuiz: string = 'Quiz Over!';
  scoreOut: string = 'Your score is: ';

  constructor(private data:QuizService){}

  ngOnInit(): void {
    this.score = this.data.getScore();

  }
}
