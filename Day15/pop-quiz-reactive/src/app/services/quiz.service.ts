import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { Question } from '../model/question';
import { QUESTIONS } from '../model/questions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements OnInit {

  private currentQuestionIndex$ = new BehaviorSubject<number>(0);
  private currentQuestion$ = new BehaviorSubject<Question>(QUESTIONS[0]);
  private historyQuiz$ = new BehaviorSubject<Question[]>([]);
  private correctAnsers$ = new BehaviorSubject<number>(0);
  private historyQuiz: Question[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentQuestion(): Observable<Question> {
    console.log(this.currentQuestion$);
    return this.currentQuestion$.asObservable();
  }

  getHistoryQuestion(): Observable<Question[]> {
    return this.historyQuiz$.asObservable();
  }

  private updateHistoryQuiz() {
    this.historyQuiz.push(this.currentQuestion$.value);
    this.historyQuiz$.next(this.historyQuiz);
  }

  answerQuestion(answer: number): Promise<void> {
    let question = this.currentQuestion$.value;
    question.userAnswer = answer;
    let index = this.currentQuestionIndex$.value + 1;

    this.updateHistoryQuiz();
    this.updateCorrecntAnswers();

    this.currentQuestionIndex$.next(index);
    this.currentQuestion$.next(QUESTIONS[index]);
    
    return Promise.resolve();
  }

  isGameOver(): Observable<boolean> {
    return this.currentQuestionIndex$.pipe(
      map(index => index >= QUESTIONS.length)
    );
  }

  private updateCorrecntAnswers() {
    let question = this.currentQuestion$.value;
    if (question.correctAnswer === question.userAnswer) {
      let countCorrectANswer = this.correctAnsers$.value + 1;
      this.correctAnsers$.next(countCorrectANswer);
    }
  }

  getScore(): number {
    let count = this.correctAnsers$.value;
    let totalQuestion = QUESTIONS.length;
    return 100 * count / totalQuestion;

  }
}
