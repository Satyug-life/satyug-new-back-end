import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
import { DonationProviders } from './entities/donation.providers';
import { donationValidation, updateDonationValidation, paginationValidation } from '../../common/validations/validation';
import { UsersModule } from '../users/users.module';
import { GrpcModule } from '../grpc/grpc.module';
import { RedisModules } from '../../common/helper/redis/redis.module';
import { UserProviders } from '../users/entities/user.providers';

@Module({
  imports: [ UsersModule, GrpcModule, RedisModules ],
  controllers: [DonationController],
  providers: [DonationService, ...DonationProviders, ...UserProviders],
  exports: [DonationService]
})
export class DonationModule implements NestModule {
  configure(donate: MiddlewareConsumer) {
    donate
      .apply(donationValidation)
      .forRoutes({ path: "/donation", method: RequestMethod.POST });
    donate
      .apply(updateDonationValidation)
      .forRoutes({ path: "/donation/:orderId", method: RequestMethod.PATCH });
    donate
      .apply(paginationValidation)
      .forRoutes({ path: "/donation/:limit/:offset", method: RequestMethod.GET });    
  }
}
