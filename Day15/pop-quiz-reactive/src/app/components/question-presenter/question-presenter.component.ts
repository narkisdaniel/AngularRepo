import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit, OnChanges {

  //data
  @Input()
  question!: Question;

  selectedOption: string = '';

  @Output()
  selectAnswer = new EventEmitter<number>();


  //method
  ngOnInit(): void {
  }
  ngOnChanges(): void {
  }

  selectAnswerOption(value: string) {
    for (let i = 0; i < this.question.answers.length; i++) {
      if (value === this.question.answers[i]) {
        this.question.userAnswer = i;
        this.selectAnswer.emit(i);
        break;
      }
    }
  }

}


