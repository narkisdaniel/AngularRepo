import { OnInit } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/question';
import { QUESTIONS } from './model/questions';
import { QuizService } from './services/quiz.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //data
  title = 'pop-quiz';
  
  constructor(private data:QuizService) {
  }
  ngOnInit(): void {
  }

  get isQuizOver$():Observable<boolean>{
    return this.data.isGameOver();
  }

}
