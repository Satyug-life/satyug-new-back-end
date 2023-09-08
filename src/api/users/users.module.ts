import { MiddlewareConsumer, Module, NestModule, RequestMethod, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '../../common/database/database.module';
import { UserProviders } from './entities/user.providers';
import { JwtStrategy } from '../../common/jwt/jwt.strategy';
import { AuthModule } from '../auth/auth.module';
import { RedisModules } from "../../common/helper/redis/redis.module";
import { CollectableModule } from '../admin/collectable/collectable.module';
import { QuizModule } from '../admin/quiz/quiz.module';
import { quizAnswerValidation, emailValidation, verifyOTPValidation, collectiveValidation, paginationValidation } from '../../common/validations/validation';
import { FileModule } from '../file/file.module';
import { FileService } from '../file/file.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule),RedisModules, CollectableModule, QuizModule,FileModule],
  controllers: [UsersController],
  providers: [UsersService, ...UserProviders, JwtStrategy,FileService],
  exports: [UsersService]
})
export class UsersModule implements NestModule {
  configure(user: MiddlewareConsumer) {
    user
      .apply(quizAnswerValidation)
      .forRoutes({ path: "users/validate-quiz-answer", method: RequestMethod.POST });
    user
      .apply(emailValidation)
      .forRoutes({ path: "users/verify-email", method: RequestMethod.POST });
    user
      .apply(verifyOTPValidation)
      .forRoutes({ path: "users/verify-otp", method: RequestMethod.POST });
    user
      .apply(collectiveValidation)
      .forRoutes({ path: "users/collective", method: RequestMethod.POST }); 
    user
      .apply(paginationValidation)
      .forRoutes({ path: "users/collective/:id/:limit/:offset", method: RequestMethod.GET }); 
    user
      .apply(paginationValidation)
      .forRoutes({ path: "users/:limit/:offset", method: RequestMethod.GET });  
    user
      .apply()
      .forRoutes({ path: "users/questions", method: RequestMethod.GET }); 
    user
      .apply()
      .forRoutes({ path: "users/verify", method: RequestMethod.POST });              
  }
}
