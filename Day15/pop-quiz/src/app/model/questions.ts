import { Question } from "./question";

export const questions: Question[] = [{
    caption: 'what do you get if you mix red and yellow?',
    answers: [
      'Pink',
      'Orange',
      'Green',
      'White'
    ],
    correctAnswer: 1,
    userAnswer: -1
  },
  {
    caption: 'what do you get if you mix blue and yellow?',
    answers: [
      'Pink',
      'Orange',
      'Green',
      'White'
    ],
    correctAnswer: 3,
    userAnswer: -1
  },
  {
    caption: 'what do you get if you mix blue and red?',
    answers: [
      'Purple',
      'Cyan',
      'Magenta',
      'White'
    ],
    correctAnswer: 2,
    userAnswer: -1
  }, {
    caption: 'what do you get if you mix green and magenta?',
    answers: [
      'Ichs',
      'Brown',
      'Green',
      'White'
    ],
    correctAnswer: 3,
    userAnswer: -1
  }];
