import { OnInit } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from 'src/app/model/question';
import { QUESTIONS } from './model/questions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //data
  title = 'pop-quiz';
  currentIndexQuestion: number = 0;
  currentQuestion: Question = QUESTIONS[this.currentIndexQuestion];
  isQuizOver: boolean = false;
  summary: Question[] = [];
  
  constructor() {
  }
  ngOnInit(): void {
    this.currentIndexQuestion = 0;
    this.currentQuestion = QUESTIONS[this.currentIndexQuestion];
  }

  //method 
  selectAnswer(value: number): void {
    if (!this.isQuizOver) {
      QUESTIONS[this.currentIndexQuestion].userAnswer = value;
    
    this.summary.push(this.currentQuestion);
    }
    if (this.currentIndexQuestion !== QUESTIONS.length - 1) {
      this.currentIndexQuestion++;
      this.currentQuestion = QUESTIONS[this.currentIndexQuestion];
    } else {
      this.isQuizOver = true;
    }
  }

  updateScore(): [number,number][] {

    let arr: [a:number,b:number][]=[];

    for (let index = 0; index < QUESTIONS.length; index++) {
      let ques=QUESTIONS[index];
      arr.push([ques.correctAnswer,ques.userAnswer]);
    }    

    return arr;
  }

}
