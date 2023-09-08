import { Quiz } from './quiz.entity';

export const QuizProviders = [
    {
        provide: "QUIZ",
        useValue: Quiz,
      },
]