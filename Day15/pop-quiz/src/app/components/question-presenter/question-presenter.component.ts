import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {

  //data
  @Input()
  question: string = '';

  @Input()
  options: string[] = [];

  @Input()
  isLastPage: boolean = false;

  selectedOption: string = '';
  buttonName: string = 'next Question'

  @Output()
  selectAnswer = new EventEmitter<number>();

  @Output()
  selectNext = new EventEmitter();

  //method
  ngOnInit(): void {
  }

  selectAnswerOption(value: string) {
    this.selectedOption = value;
    for (let i = 0; i < this.options.length; i++) {
      if (value === this.options[i]) {
        this.selectAnswer.emit(i);
        break;
      }
    }
  }

  moveNext() {
    if (this.selectedOption !== '') {
      this.selectNext.emit();
      this.selectedOption = '';
    }
  }

  endQuiz(){
    this.buttonName = 'end Quiz';
    this.selectNext.emit();
    this.selectedOption = '';
  }
}


