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

  endQuiz: string = 'Quiz Over!';
  scoreOut: string = 'Your score is: ';
  
  //methods
  ngOnInit(): void {
  }
}
