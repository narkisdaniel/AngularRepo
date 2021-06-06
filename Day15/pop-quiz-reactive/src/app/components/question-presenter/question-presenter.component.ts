import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/question';
import { QuizService } from 'src/app/services/quiz.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {

  //data
  currentQuestion$!:Observable<Question>;

  constructor(private data:QuizService){}

  //method
  ngOnInit(): void {
    this.currentQuestion$=this.data.getCurrentQuestion();
  }


  async selectAnswerOption(answerIndex: number) {
    await this.data.answerQuestion(answerIndex);
  }

}


