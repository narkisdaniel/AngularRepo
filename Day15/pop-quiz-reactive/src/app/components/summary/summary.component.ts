import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/question';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private data:QuizService) {
  }

  //method
  ngOnInit(): void {
  }

  get historyQuestion$(): Observable<Question[]>{
    return this.data.getHistoryQuestion();
  }
  

}
