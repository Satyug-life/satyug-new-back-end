import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { QuizProviders } from './entities/quiz.providers';
import { paginationValidation } from '../../../common/validations/validation';

@Module({
  controllers: [QuizController],
  providers: [QuizService, ...QuizProviders],
  exports: [QuizService]
})
export class QuizModule implements NestModule {
  configure(quiz: MiddlewareConsumer) {
    quiz
      .apply(paginationValidation)
      .forRoutes({ path: "product/:type/:limit/:offset", method: RequestMethod.GET });
  }
}
